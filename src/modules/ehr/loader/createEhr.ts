import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { post } from '@common/requests.js';

import { generateCreationParams } from '@modules/ehr/fakeEhrParams.js';

const stages = [
    {
        duration: "10s",
        target: 100,
    },
    {
        duration: "20s",
        target: 200,
    },
    {
        duration: "30s",
        target: 400,
    },
    {
        duration: "1m30s",
        target: 500,
    }
];

const thresholds = {
    'http_req_waiting': [{
        threshold: 'p(95)<30000',
        abortOnFail: true,
        delayAbortEval: '10s'
    }],
};

export const options = {
    ...defaultOptions,
    thresholds: thresholds,
    stages: stages,
    rps: undefined,
};

export default callPerSecond(() => {
    const ehr = generateCreationParams();
    post('/ehr', { ehr });
}, 0);
