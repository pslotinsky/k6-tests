import { Options } from 'k6/options';

import { callPerSecond, sample, times } from '@common/utils.js';
import { defaultOptions, slowStages, slowThresholds } from '@common/defaultOptions.js';
import { SERVICE_ID, EHR_ID } from '@common/constants.js';

import { post, get } from '@common/requests.js';

function randomUuid(): string {
    const RFC4122_TEMPLATE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    const replacePlaceholders = function (placeholder) {
        const random = randomNumber(15);
        const value = placeholder == 'x' ? random : (random &0x3 | 0x8);
        return value.toString(16);
    };
    return RFC4122_TEMPLATE.replace(/[xy]/g, replacePlaceholders);
}

function randomNumber(a: number = Number.MAX_SAFE_INTEGER, b: number = 0): number {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    return Math.floor((max - min) * Math.random() + min);
}

export const options: Partial<Options> = {
    ...defaultOptions,
    stages: slowStages,
    // thresholds: slowThresholds,
};

export default callPerSecond(() => {
    const { scheduleModels } = get('/schedule-model', {
        type: 'user',
        status: 'active',
        limit: 1,
        offset: randomNumber(0, 500)
    });

    const scheduleModel = scheduleModels[0];
    const medCaseId = randomUuid();

    const month = randomNumber(1, 12);
    const day = randomNumber(1, 28);
    const hour = randomNumber(7, 21);
    const minutes = randomNumber(0, 54);

    const reservation = {
        id: randomUuid(),
        type: 'visit',
        scheduleModelIds: [scheduleModel.id],
        patientId: EHR_ID,
        serviceIds: [SERVICE_ID],
        medicalCaseIds: [medCaseId],
        startTime: (new Date(2022, month, day, hour, minutes)),
        endTime: new Date(2022, month, day, hour,minutes + 5, 1),
    };

    post(`/reservation`, { reservation });

}, 0);
