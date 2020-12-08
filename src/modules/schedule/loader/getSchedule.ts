import { defaultOptions, slowlyStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowlyStages,
}

export default callPerSecond(() => {
    get('/schedule', {
        limit: 100,
        offset: 0,
        from: '2020-11-11T18:36:07.850Z',
        to: '2020-11-12T18:36:07.850Z',
    });
}, 0);
