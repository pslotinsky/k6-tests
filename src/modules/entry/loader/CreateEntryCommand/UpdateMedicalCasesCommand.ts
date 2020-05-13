import { randomTimes, randomSleep, sample } from '@common/utils.js';
import { randomUuid, randomText } from '@common/faker.js';
import { get } from '@common/requests.js';

import { MedicalCaseType } from 'types/diagnosis';
import { DictionaryItem } from 'types/dictionary';

import { UpdateEntryCommand } from './UpdateEntryCommand.js';

export class UpdateMedicalCasesCommand extends UpdateEntryCommand {
    public readonly medicalCaseIds: string[] = [];

    public execute(): void {
        this.updateDiagnosis();
    }

    private updateDiagnosis(): void {
        randomTimes(() => {
            this.updateDiagnosisField();

            randomSleep(7);
        }, 2);
    }

    private updateDiagnosisField(): void {
        const medicalCaseId = randomUuid();

        const type = this.randomDiagnosisType();

        this.updateField('diagnosis', {
            medicalCaseId,
            type,
            icdId: '',
            clinicalDiagnosis: '',
        });

        randomSleep(10);

        const icdId = this.randomIcdId();

        this.updateField('diagnosis', {
            medicalCaseId,
            type,
            icdId,
            clinicalDiagnosis: '',
        });

        randomSleep(10);

        randomTimes(() => {
            this.updateField('diagnosis', {
                medicalCaseId,
                type,
                icdId,
                clinicalDiagnosis: randomText(),
            });

            randomSleep(10);
        }, 10);

        this.medicalCaseIds.push(medicalCaseId);
    }
    
    private randomDiagnosisType(): string {
        return sample([MedicalCaseType.Acute, MedicalCaseType.Chronic, MedicalCaseType.Preventative]);
    }

    private randomIcdId(): string {
        const parts = ['пе', 'пер', 'пере', 'перел', 'перело', 'перелом'];

        let data;
        for (const part of parts) {
            data = get(`/dictionary-item?names=mkb10&titles=${part}`);
        }

        return sample<DictionaryItem>(data.items.mkb10).id;
    }
}
