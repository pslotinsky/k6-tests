import { defaultOptions, slowlyStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowlyStages,
};

export default callPerSecond(() => {
    get('/entry-type');
}, 0);
