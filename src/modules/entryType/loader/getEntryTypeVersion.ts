import { defaultOptions, middleStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { ENTRY_TYPE_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions,
    stages: middleStages,
};

export default callPerSecond(() => {
    get(`/entry-type/${ENTRY_TYPE_ID}/version/1`);
}, 0);
