import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions
}

export default callPerSecond(() => {
    get('/customized-service', {
        scheduleModelIds: '7ea07eb7-01c7-434d-8fba-cc2fb46ad029',
    });
}, 0);
