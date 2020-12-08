import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { SCHEDULE_MODEL_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions
}

export default callPerSecond(() => {
    get('/customized-service', {
        scheduleModelIds: SCHEDULE_MODEL_ID,
    });
}, 0);
