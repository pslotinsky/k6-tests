import { UpdateEntryCommand } from './UpdateEntryCommand.js';

export class UpdateSubjectiveDataCommand extends UpdateEntryCommand {
    public execute(): void {
        this.updateTextField('major events');
        this.updateTextField('social history');
    }
}
