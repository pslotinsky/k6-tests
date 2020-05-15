import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { post } from '@common/requests.js';

import { generateCreationParams } from '@modules/ehr/fakeEhrParams.js';

export const options = { ...defaultOptions };

const defaultStages = [
    {
        duration: "10s",
        target: 50,
    },
    {
        duration: "10s",
        target: 100,
    },
    {
        duration: "10s",
        target: 500,
    },
    {
        duration: "1m30s",
        target: 500,
    }
];

export default callPerSecond(() => {
    const ehr = generateCreationParams();
    post('/ehr', { ehr });
});
