import { defaultOptions, middleStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: middleStages,
};

export default callPerSecond(() => {
    get('/service', {
        query: 'прием',
        limit: 100,
    });
}, 0);
