import { Options } from 'k6/options';

import { callPerSecond } from '@common/utils.js';
import { defaultOptions, slowlyStages, slowThresholds } from '@common/defaultOptions.js';
import { ENTRY_TYPE_ID, ORGANIZATION_ID } from '@common/constants.js';

import { get, post } from '@common/requests.js';
// import { randomNumber, randomUuid } from '@common/faker';

export const options: Partial<Options> = {
    ...defaultOptions,
    stages: slowlyStages,
    // thresholds: slowThresholds,
};

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

export default callPerSecond(() => {

    const { ehrs } = get('/ehr', {
        limit: 1,
        offset: randomNumber(0, 5000)
    });

    const ehr = ehrs[0];

    const id = randomUuid();
    post('/entry', {
        entry: {
            id,
            organizationId: ORGANIZATION_ID,
            typeId: ENTRY_TYPE_ID,
            ehrId: ehr.id,
        }
    })
}, 0);
