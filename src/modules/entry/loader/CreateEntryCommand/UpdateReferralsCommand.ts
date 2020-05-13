import { randomTimes, randomSleep, sample, times } from '@common/utils.js';
import { randomUuid, randomText, randomNumber } from '@common/faker.js';
import { post, get, put } from '@common/requests.js';

import { UpdateEntryCommand, UpdateEntryCommandParams } from './UpdateEntryCommand.js';

export interface UpdateReferralsCommandParams extends UpdateEntryCommandParams {
    medicalCaseIds: string[];
}

export class UpdateReferralsCommand extends UpdateEntryCommand<UpdateReferralsCommandParams> {
    public execute(): void {
        randomTimes(() => {
            const ids = this.createReferrals();

            randomSleep(10);

            this.updateReferrals(ids);

            randomSleep(10);
        }, 3);
    }

    private createReferrals(): string[] {
        const { entry, medicalCaseIds } = this.data;
        const parentEntryId = entry.id;
        const startDate = entry.creationTime;
        const serviceId = this.randomServiceId();
        const count = randomNumber(1, 3);
        const ids = times(count, () => randomUuid());

        post(`/ehr/${entry.ehrId}/referral`, {
            referrals: ids.map(id => ({
                id,
                parentEntryId,
                medicalCaseIds,
                startDate,
                serviceId,
                duration: 30,
                comment: ''
            }))
        });

        get(`/ehr/${entry.ehrId}/plan`, {
            'serviceIds[]': serviceId,
            actualOn: startDate
        });

        return ids;
    }

    private updateReferrals(ids: string[]): void {
        const { entry } = this.data;
        put(`/ehr/${entry.ehrId}/referral?ids=${ids.join(',')}&entryId=${entry.id}`, {
            referral: {
                comment: randomText()
            }
        });
    }

    private randomServiceId(): string {
        get('/service', { limit: 100, query: 'при' });

        const { services } = get('/service', { limit: 100, query: 'прием' });

        return sample<any>(services).id;
    }
}
