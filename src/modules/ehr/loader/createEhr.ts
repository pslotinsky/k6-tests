import { stages, thresholds } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { post } from '@common/requests.js';

import { generateCreationParams } from '@modules/ehr/fakeEhrParams.js';

export const options = { stages, thresholds };

export default callPerSecond(() => {
    const ehr = generateCreationParams();
    post('/ehr', { ehr });
});
