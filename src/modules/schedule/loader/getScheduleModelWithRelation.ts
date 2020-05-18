import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';
import { randomName } from '@common/faker.js';

export const options = {
    ...defaultOptions
}

export default callPerSecond(() => {
    get('/schedule-model/user', {
        name: randomName(),
    });
}, 0);
