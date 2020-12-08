import { defaultOptions, slowStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { SCHEDULE_MODEL_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions,
    stages: slowStages,
}

export default callPerSecond(() => {
    get(`/work-time`, {
        scheduleModelId: SCHEDULE_MODEL_ID
    });
}, 0);
