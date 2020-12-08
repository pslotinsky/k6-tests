import { defaultOptions, slowlyStages, slowStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowStages,
}

export default callPerSecond(() => {
    get('/schedule/slots', {
        serviceId: 'be04e274-7d44-46d5-82ff-6801d30844f9',
        from: '2020-11-11T18:36:07.850Z',
        to: '2020-11-12T18:36:07.850Z',
    });
}, 0);
