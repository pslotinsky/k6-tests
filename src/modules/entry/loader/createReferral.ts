import { Options } from 'k6/options';

import { callPerSecond, sample, times } from '@common/utils.js';
import { defaultOptions, slowlyStages, slowThresholds } from '@common/defaultOptions.js';
import { FROM_DATE } from '@common/constants.js';

import { post, get } from '@common/requests.js';

function randomUuid(): string {
    const RFC4122_TEMPLATE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    const replacePlaceholders = function (placeholder) {
        const random = randomNumber(15);
        const value = placeholder == 'x' ? random : (random &0x3 | 0x8);
        return value.toString(16);
    };
    return RFC4122_TEMPLATE.replace(/[xy]/g, replacePlaceholders);
}

function randomNumber(a: number = Number.MAX_SAFE_INTEGER, b: number = 0): number {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    return Math.floor((max - min) * Math.random() + min);
}

export const options: Partial<Options> = {
    ...defaultOptions,
    stages: slowlyStages,
    // thresholds: slowThresholds,
};

export default callPerSecond(() => {
    const { entries } = get('/entry', {
        statuses: 'draft',
        creationTimeFrom: FROM_DATE.toISOString(),
        limit: 1,
        offset: randomNumber(0, 1000)
    });

    const entry = entries[0];

    const { services } = get('/service', { limit: 100, query: 'прием' });

    const serviceId = sample<any>(services).id;
    const count = randomNumber(1, 3);
    const ids = times(count, () => randomUuid());
    const medCaseId = randomUuid();

    post(`/ehr/${entry.ehrId}/referral`, {
        referrals: ids.map(id => ({
            id,
            serviceId,
            startDate: FROM_DATE.toISOString(),
            medicalCaseIds: [medCaseId],
            parentEntryId: entry.id,
            duration: 30,
            comment: ''
        }))
    });
}, 0);
