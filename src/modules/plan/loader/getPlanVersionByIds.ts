import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions
}

export default callPerSecond(() => {
    get('/plan-version/3e05d26f-3f83-4a04-9e17-b07f253acc33');
}, 0);
