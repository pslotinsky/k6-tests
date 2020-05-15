import { defaultOptions, middleStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: middleStages,
};

export default callPerSecond(() => {
    get('/entry-type/508d0678-23c3-4ec5-a02b-6bf5326a4746/version/1');
}, 0);
