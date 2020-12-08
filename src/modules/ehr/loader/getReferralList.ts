import { defaultOptions, slowThresholds, slowlyStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { EHR_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions,
    stages: slowlyStages,
    // threshold: slowThresholds,
};

export default callPerSecond(() => {
    get(`/ehr/${EHR_ID}/referral`);
    // get(`/ehr/${EHR_ID}/referral`);
}, 0);
