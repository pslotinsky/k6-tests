import { defaultOptions, middleStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: middleStages,
};

export default callPerSecond(() => {
    get('/dictionary-item', { ids: '658ce6fd-1501-4bc0-95c3-88afedc2ddbd' });
}, 0);
