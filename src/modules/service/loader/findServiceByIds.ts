import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { SERVICE_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions,
    // rps: undefined,
};

export default callPerSecond(() => {
    get('/service', { ids: SERVICE_ID });
}, 0);
