import { defaultOptions, middleStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { DICTIONARY_ITEM_ID } from '@common/constants.js';

export const options = {
    ...defaultOptions,
    stages: middleStages,
};

export default callPerSecond(() => {
    get('/dictionary-item', { ids: DICTIONARY_ITEM_ID });
}, 0);
