import { thresholds } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

import { generateFirstName } from '@modules/ehr/fakeEhrParams.js';

export const options = {
    stages: [
        {
            duration: "1m",
            target: 300,
        }
    ],
    thresholds,
};

export default callPerSecond(() => {
    const query = generateFirstName();
    get('/ehr', { query });
});
