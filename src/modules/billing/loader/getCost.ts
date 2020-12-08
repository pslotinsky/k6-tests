import { defaultOptions, slowlyStages, slowStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { post } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    // stages: slowStages,
}

export default callPerSecond(() => {
    post('/cost', {
        serviceId: 'be04e274-7d44-46d5-82ff-6801d30844f9',
    });
}, 0);
