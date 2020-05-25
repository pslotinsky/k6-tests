import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
};

export default callPerSecond(() => {
    get('/ehr/6975c4b0-4ce2-42e4-a137-13b0329f3063/bank-card');
}, 0);
