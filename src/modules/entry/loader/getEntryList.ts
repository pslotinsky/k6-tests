import { defaultOptions, slowlyStages, thresholds } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    // stages: slowlyStages,
};

export default callPerSecond(() => {
    get('/entry', {
        ehrIds: '5af0a60a-09c1-4e26-88c8-3bc6d29b6532',
    });
}, 0);
