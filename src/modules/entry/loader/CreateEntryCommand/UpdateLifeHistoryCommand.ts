import { Dictionaries, DictionaryParams } from 'types/dictionary';

import { randomTimes, randomSleep, sample } from '@common/utils.js';

import { UpdateEntryCommand, UpdateEntryCommandParams } from './UpdateEntryCommand.js';

export interface UpdateLifeHistoryCommandParams extends UpdateEntryCommandParams {
    dictionaries: Dictionaries;
}

export class UpdateLifeHistoryCommand extends UpdateEntryCommand<UpdateLifeHistoryCommandParams> {
    public execute(): void {
        this.updateTextField(`family background`);
        this.updateDrugAllergies();
        this.updateAllergies();
    }

    private updateDrugAllergies(): void {
        const { drug } = this.data.dictionaries;

        this.updateAllergyField('drugAllergy', drug);
    }

    private updateAllergies(): void {
        const { environmentAllergen, foodAllergen } = this.data.dictionaries;
        const allergies = environmentAllergen.concat(foodAllergen);

        this.updateAllergyField('drugAllergy', allergies);
    }

    private updateAllergyField(name: string, allergies: DictionaryParams[]): void {
        randomTimes(() => {
            const value = this.createAllergyValue(allergies);
            this.updateField(name, value);

            randomSleep(7);
        }, 3);
    }

    private createAllergyValue(allergies: DictionaryParams[]) {
        return randomTimes(() => this.createAllergyValueItem(allergies), 3);
    }

    private createAllergyValueItem(allergies: DictionaryParams[]) {
        const id = sample(allergies).id;
        const { allergyReaction } = this.data.dictionaries;
        const reactionIds = randomTimes(() => sample(allergyReaction).id, 3);

        return {
            id,
            value: { id, reactionIds }
        }
    }
}
