import { defaultOptions, middleStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: middleStages,
};

export default callPerSecond(() => {
    get('/ehr/6975c4b0-4ce2-42e4-a137-13b0329f3063/plan', {
        serviceIds: 'fe26bb1a-ffe0-405d-a9f2-1a4b49bae195',
        actualOn: '2020-05-01'
    });
}, 0);
