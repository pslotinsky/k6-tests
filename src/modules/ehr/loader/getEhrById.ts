import { stages, thresholds } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = { stages, thresholds };

export default callPerSecond(() => {
    get('/ehr/1');
});
