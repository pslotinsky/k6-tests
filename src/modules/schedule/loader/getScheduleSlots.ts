import { defaultOptions, slowlyStages, slowStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { SERVICE_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions,
    // stages: slowStages,
}

export default callPerSecond(() => {
    get('/schedule/slots', {
        serviceId: SERVICE_ID,
        from: '2020-11-11T18:36:07.850Z',
        to: '2020-11-12T18:36:07.850Z',
    });
}, 0);
