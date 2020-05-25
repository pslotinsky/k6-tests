import { defaultOptions, slowlyStages, slowThresholds } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowlyStages,
    thresholds: slowThresholds,
}

export default callPerSecond(() => {
    get('/rendered-service');
}, 0);
