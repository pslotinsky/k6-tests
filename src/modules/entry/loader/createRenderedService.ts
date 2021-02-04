import { Options } from 'k6/options';

import { callPerSecond, sample, times } from '@common/utils.js';
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
    const { entries } = get('/entry', {
        statuses: 'draft',
        creationTimeFrom: FROM_DATE.toISOString(),
        limit: 1,
        offset: randomNumber(0, 500)
    });

    const entry = entries[0];
    const { services } = get('/service', { limit: 100, query: 'прием' });

    const serviceId = sample<any>(services).id;
    const count = randomNumber(1, 3);
    const ids = times(count, () => randomUuid());

    const renderedService = {
        serviceId,
        medicalCaseIds: [],
        comment: '',
        plans: [],
    };

    post(`/entry/${entry.id}/field/rendered-service`, {
        ids,
        renderedService,
    });

}, 0);
