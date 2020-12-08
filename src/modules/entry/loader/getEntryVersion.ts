import { defaultOptions, slowStages, slowThresholds } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowStages,
    thresholds: slowThresholds,
};

export default callPerSecond(() => {
    get('/entry/80/version');
}, 0);
