import { defaultOptions, slowStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowStages,
};

export default callPerSecond(() => {
    get('/block');
}, 0);
