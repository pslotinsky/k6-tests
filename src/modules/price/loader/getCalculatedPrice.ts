import { defaultOptions, slowlyStages, slowThresholds } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowlyStages,
    thresholds: slowThresholds,
}

export default callPerSecond(() => {
    get('/price-list/a042c34b-0839-4c98-bcd8-0ef29960fc2c/calculated-price',
        {
            userId: 'd3ab5319-eee3-43fd-a488-9808164b2abd',
            organizationId: 'a3fc0ddd-05f3-48bd-a052-26d2a60ac7b9',
        });
}, 0);
