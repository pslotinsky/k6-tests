import { EntryData } from 'types/entry';

import { Command } from '@common/Command.js';
import { put } from '@common/requests.js';
import { randomTimes, randomSleep } from '@common/utils.js';
import { randomText } from '@common/faker.js';

export interface UpdateEntryCommandParams {
    entry: EntryData;
}

export abstract class UpdateEntryCommand<T extends UpdateEntryCommandParams = UpdateEntryCommandParams> extends Command<T> {
    protected updateTextField(name: string): void {
        randomTimes(() => {
            this.updateField(name, randomText());
            randomSleep();
        });
    }

    protected updateField(name: string, data: any): void {
        const { id } = this.data.entry;
        const value = (typeof data == 'number') ? data.toString() : data;

        put(`/entry/${id}/field/${name}`, {
            field: { value }
        });
    }
}
