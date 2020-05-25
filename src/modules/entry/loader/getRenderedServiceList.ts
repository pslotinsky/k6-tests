import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
};

export default callPerSecond(() => {
    get('/entry/17eb25e3-c209-4116-8946-15be6e42f1c6/rendered-service');
}, 0);
