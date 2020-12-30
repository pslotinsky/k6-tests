import { defaultOptions, slowlyStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { EHR_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions,
    stages: slowlyStages,
};

export default callPerSecond(() => {
    get(`/ehr/${EHR_ID}/field`);
}, 0);
