import { randomNumber } from '@common/faker.js';
import { randomSleep, randomTimes } from '@common/utils.js';

import { UpdateEntryCommand } from './UpdateEntryCommand.js';

export class UpdateMeteringCommand extends UpdateEntryCommand {
    public execute(): void {
        this.updateHeight();
        this.updateWeight();
        this.updateBloodPressure();
        this.updateTemperature();
        this.updatePulse();
        this.updateRespiratoryRate();
        this.updateSO2();
    }

    private updateHeight(): void {
        const height = randomNumber(120, 200);
        this.updateField(`height`, height);
        randomSleep();
    }

    private updateWeight(): void {
        const weight = randomNumber(50, 120);
        this.updateField(`weight`, weight);
        randomSleep();
    }

    private updateBloodPressure(): void {
        const upper = randomNumber(100, 180);
        const lower = upper - randomNumber(20, 60);
        this.updateField(`bloodPressure`, `${upper}/${lower}`);
        randomSleep();
    }

    private updateTemperature(): void {
        const temperature = randomNumber(35, 40) + randomNumber();
        this.updateField(`temperature`, temperature.toFixed(1));
        randomSleep();
    }

    private updatePulse(): void {
        randomTimes(() => {
            const pulse = randomNumber(120, 200);
            this.updateField(`pulse`, pulse);
            randomSleep(3);
        }, 3);
    }

    private updateRespiratoryRate(): void {
        const upper = randomNumber(20, 25);
        const lower = randomNumber(12, 19);
        this.updateField(`respiratoryRate`, `${upper}/${lower}`);
        randomSleep();
    }

    private updateSO2(): void {
        const so2 = randomNumber(80, 97);
        this.updateField(`SO2`, so2);
        randomSleep();
    }
}
