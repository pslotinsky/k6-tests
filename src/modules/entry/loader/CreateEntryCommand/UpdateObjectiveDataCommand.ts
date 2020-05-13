import { UpdateEntryCommand } from './UpdateEntryCommand.js';

export class UpdateObjectiveDataCommand extends UpdateEntryCommand {
    public execute(): void {
        this.updateTextField('objective inspection');
    }
}
