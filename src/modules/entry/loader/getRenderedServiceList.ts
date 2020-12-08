import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { ENTRY_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions,
};

export default callPerSecond(() => {
    get(`/entry/${ENTRY_ID}/rendered-service`);
}, 0);
