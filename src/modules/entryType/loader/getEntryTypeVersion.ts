import { defaultOptions } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

// const stages = [
//     {
//         duration: "1m",
//         target: 500,
//     },
//     {
//         duration: "1m",
//         target: 10000,
//     },
// ];

export const options = {
    ...defaultOptions,
    // stages,
    // rps: undefined,
};

export default callPerSecond(() => {
    get('/entry-type/508d0678-23c3-4ec5-a02b-6bf5326a4746/version/1');
}, 0);
