import { defaultOptions, middleStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: middleStages,
};

export default callPerSecond(() => {
    get('/personal-account/6975c4b0-4ce2-42e4-a137-13b0329f3063/balance');
}, 0);
