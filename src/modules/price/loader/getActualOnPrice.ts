import { defaultOptions, slowStages } from '@common/defaultOptions.js';
import { callPerSecond } from '@common/utils.js';
import { get } from '@common/requests.js';

export const options = {
    ...defaultOptions,
    stages: slowStages,
}

export default callPerSecond(() => {
    get('/price/actual-on/2020-12-08', {
        includeScheduleModels: true,
        ehrId: 'c44c4dff-dbf5-40bd-aea3-997173ef6950',
        serviceIds: 'a873a906-9e71-4985-bcfa-1f98790b7e9d,a873a906-9e71-4985-bcfa-1f98790b7e9d,a873a906-9e71-4985-bcfa-1f98790b7e9d,02c0ae51-1f5e-4366-869c-7efcc8f903f4,02d5b5d9-0aea-4dd9-ad48-882309639a0e,02d9fe25-c5d5-45ff-9068-83d3a8f4e8a4,02da6da0-3229-4135-a71a-830a8461b98b,02db91df-2c74-4330-8823-b7743bb5253b,02ef1c4b-6fa7-45a5-8bf2-d25ff2d13e69,02f00485-4cfe-4a30-acfc-668a0336f6ef,02f3340d-ac02-4766-946e-60b559a56f07,02f418e2-3096-44a3-b637-0de2ed5e8a9a,02f855ea-5b09-4b25-a83e-deba65f9c561,02f8ab3c-7c55-467f-b8b1-748225367afd,02fc1048-b7b1-4d0d-8e18-039a5b67d43a,030274c1-53ff-4d8e-9e66-7a01e512b404,030b42cd-ace7-42b8-987a-036524ee3a71,0317a9db-9fff-499b-923a-fe0ecc0bb457,031cced3-74ef-41eb-9a38-bfc920e76e1f,0323029f-5cc3-4fde-b412-5c0fe3951684,032a9e6f-a2a0-4a52-a6b3-057db12a0e8f,032f4963-c034-4d34-add7-9f60008fa09b,03318848-d7f7-40b4-9250-240fb80397f4',
    });
}, 0);

