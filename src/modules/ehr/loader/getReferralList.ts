import { defaultOptions, slowThresholds, slowlyStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowlyStages,
    threshold: slowThresholds,
};

export default callPerSecond(() => {
    get('/ehr/1a529931-6cac-4471-91c6-15aae916bc18/referral');
}, 0);
