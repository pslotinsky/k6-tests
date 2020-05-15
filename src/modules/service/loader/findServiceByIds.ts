import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    // rps: undefined,
};

export default callPerSecond(() => {
    get('/service', { ids: 'fe26bb1a-ffe0-405d-a9f2-1a4b49bae195' });
}, 0);
