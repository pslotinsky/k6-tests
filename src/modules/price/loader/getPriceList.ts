import { defaultOptions, slowlyStages, slowThresholds } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowlyStages,
    thresholds: slowThresholds,
}

export default callPerSecond(() => {
    get('/price-list/a042c34b-0839-4c98-bcd8-0ef29960fc2c');
}, 0);
