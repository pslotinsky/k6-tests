import { Options } from 'k6/options';

import { callPerSecond } from '@common/utils.js';
import { defaultOptions, slowlyStages, slowThresholds } from '@common/defaultOptions.js';
import { ENTRY_TYPE_ID, ORGANIZATION_ID } from '@common/constants.js';

import { get, post } from '@common/requests.js';
import { randomNumber, randomUuid } from '@common/faker';

export const options: Partial<Options> = {
    ...defaultOptions,
    stages: slowlyStages,
    thresholds: slowThresholds,
};

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
