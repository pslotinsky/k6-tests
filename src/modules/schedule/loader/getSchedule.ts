import { defaultOptions, slowStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowStages,
}

export default callPerSecond(() => {
    get('/schedule', {
        limit: 100,
        offset: 0,
        from: '2020-05-01T18:36:07.850Z',
        to: '2020-05-30T18:36:07.850Z',
    });
}, 0);
