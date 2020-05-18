import { defaultOptions, slowStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowStages,
}

export default callPerSecond(() => {
    get('/schedule-model/ada42c4a-e24d-4fdf-b89b-1eb4fdbbca4e/worktime');
}, 0);
