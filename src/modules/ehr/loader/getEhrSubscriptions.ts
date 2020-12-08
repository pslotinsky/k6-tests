import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { EHR_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions,
};

export default callPerSecond(() => {
    get(`/ehr/${EHR_ID}/subscription`);
}, 0);
