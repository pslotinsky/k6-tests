import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions
}

export default callPerSecond(() => {
    get('/price-list/a042c34b-0839-4c98-bcd8-0ef29960fc2c/price',
        {
            limit: 100,
        });
}, 0);
