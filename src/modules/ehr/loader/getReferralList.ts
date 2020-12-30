import { defaultOptions, slowThresholds, slowStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { EHR_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions,
    stages: slowStages,
    // threshold: slowThresholds,
};

export default callPerSecond(() => {
    get(`/ehr/${EHR_ID}/referral`);
    // get(`/ehr/${EHR_ID}/referral`);
}, 0);
