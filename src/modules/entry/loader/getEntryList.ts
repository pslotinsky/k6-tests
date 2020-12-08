import { defaultOptions, slowlyStages, thresholds } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { ENTRY_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions,
    // stages: slowlyStages,
};

export default callPerSecond(() => {
    get('/entry', {
        ehrIds: ENTRY_ID,
    });
}, 0);
