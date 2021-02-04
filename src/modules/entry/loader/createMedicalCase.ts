import { Options } from 'k6/options';

import { callPerSecond } from '@common/utils.js';
import { defaultOptions, slowlyStages, slowThresholds } from '@common/defaultOptions.js';
import { FROM_DATE } from '@common/constants.js';

import { post, get } from '@common/requests.js';
import { randomUuid, randomNumber } from '@common/faker';

export const options: Partial<Options> = {
    ...defaultOptions,
    stages: slowlyStages,
    thresholds: slowThresholds,
};

export default callPerSecond(() => {
    const medicalCaseId = randomUuid();

    const icdId = randomUuid();
    const { entries } = get('/entry', {
        statuses: 'draft',
        creationTimeFrom: FROM_DATE.toISOString(),
        limit: 1,
        offset: randomNumber(0, 500)
    });

    const entry = entries[0];

    post(`/entry/${entry.id}/field/diagnosis`, {
        diagnosis: {
            medicalCaseId,
            icdId,
            type: 'acute',
            clinicalDiagnosis: 'clinicalDiagnosis',
        }
    })
}, 0);
