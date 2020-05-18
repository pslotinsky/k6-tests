import { EhrData, EhrFieldsData } from 'types/ehr';
import { EntryData } from 'types/entry';
import { Dictionaries } from 'types/dictionary';

import { Command } from '@common/Command.js';
import { randomName, randomUuid } from '@common/faker.js';
import { get, post } from '@common/requests.js';
import { sample, randomSleep } from '@common/utils.js';

import { UpdateSubjectiveDataCommand } from './UpdateSubjectiveDataCommand.js';
import { UpdateLifeHistoryCommand } from './UpdateLifeHistoryCommand.js';
import { UpdateMeteringCommand } from './UpdateMeteringCommand.js';
import { UpdateObjectiveDataCommand } from './UpdateObjectiveDataCommand.js';
import { UpdateMedicalCasesCommand } from './UpdateMedicalCasesCommand.js';
import { UpdateConclusionCommand } from './UpdateConclusionCommand.js';
import { UpdateReferralsCommand } from './UpdateReferralsCommand.js';
import { UpdateRenderedServiceCommand } from './UpdateRenderedServiceCommand.js';

export class CreateEntryCommand {
    private ehr: EhrData;
    private entry: EntryData;
    private ehrFields: EhrFieldsData;
    private dictionaries: Dictionaries;

    public execute(): void {
        const ehr = this.getRandomEhr();

        if (ehr) {
            this.init(ehr.id);

            randomSleep();

            const entry = this.entry;
            const updateSubjectiveDataCommand = new UpdateSubjectiveDataCommand({ entry });
            updateSubjectiveDataCommand.execute();

            const dictionaries = this.dictionaries;
            const updateLifeHistoryCommand = new UpdateLifeHistoryCommand({ entry, dictionaries });
            updateLifeHistoryCommand.execute();

            const updateMeteringCommand = new UpdateMeteringCommand({ entry });
            updateMeteringCommand.execute();

            const updateObjectiveDataCommand = new UpdateObjectiveDataCommand({ entry });
            updateObjectiveDataCommand.execute();

            const updateMedicalCasesCommand = new UpdateMedicalCasesCommand({ entry });
            updateMedicalCasesCommand.execute();

            const updateConclusionCommand = new UpdateConclusionCommand({ entry });
            updateConclusionCommand.execute();

            const { medicalCaseIds } = updateMedicalCasesCommand;
            const updateReferralsCommand = new UpdateReferralsCommand({ entry, medicalCaseIds });
            updateReferralsCommand.execute();

            const updateRenderedServiceCommand = new UpdateRenderedServiceCommand({ entry });
            updateRenderedServiceCommand.execute();
        }
    }

    private getRandomEhr(): EhrData {
        const query = randomName();
        const { ehrs } = get('/ehr', { query });
        return sample(ehrs);
    }

    private init(ehrId: string): void {
        this.getEntryTypes();
        this.ehr = this.getEhr(ehrId);
        this.entry = this.createEntry();
        this.ehrFields = this.getEhrFields();
        this.dictionaries = this.getDictionaries();
        this.getDictionaryItems();
        this.getServices();
        this.getPlans();
        this.getEntryTypes();
        this.getVersions();
    }

    private getEntryTypes(): void {
        get('/entry-type');
    }

    private getEhr(id: string): EhrData {
        const { ehr } = get(`/ehr/${id}`);
        return ehr;
    }

    private createEntry(): EntryData {
        const id = randomUuid();
        post('/entry', {
            entry: {
                organizationId: 'a3fc0ddd-05f3-48bd-a052-26d2a60ac7b9',
                typeId: '508d0678-23c3-4ec5-a02b-6bf5326a4746',
                ehrId: this.ehr.id,
                id,
            }
        });

        const { entry } = get(`/entry/${id}`);
        return entry;
    }

    private getEhrFields(): EhrFieldsData {
        const { id } = this.ehr;
        const { ehrFields } = get(`/ehr/${id}/field`);
        return ehrFields;
    }

    private getDictionaries(): Dictionaries {
        const { items } = get(`/dictionary-item?names=drug,allergyReaction,foodAllergen,environmentAllergen,mkb10`);
        return items;
    }

    private getDictionaryItems() {
        const { medicalCases = [] } = this.ehrFields;
        const icdIds = medicalCases.map(item => item.icdId);
        if (icdIds.length > 0) {
            get('/dictionary-item?' + icdIds.map(item => 'ids[]=' + item).join('&'));
        }
    }

    private getServices() {
        const { referrals = [] } = this.ehrFields;
        const serviceIds = referrals.map(item => item.serviceId);
        if (serviceIds.length > 0) {
            get('/service', { ids: serviceIds.join(',') });
        }
    }

    private getPlans() {
        const { id, ehrId, creationTime } = this.entry;
        const { renderedServices } = get(`/entry/${id}/field/rendered-service`);
        const serviceIds = renderedServices.map(item => item.serviceId);
        if (serviceIds.length > 0) {
            const serviceIdsQuery = serviceIds.map(item => 'serviceIds[]=' + item).join('&');
            get(`/ehr/${ehrId}/plan?${serviceIdsQuery}&actualOn=${creationTime}`);
        }
    }

    private getVersions() {
        const { id } = this.entry;
        get(`/entry/${id}/version`);
    }
}
