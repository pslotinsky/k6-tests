import { UpdateEntryCommand } from './UpdateEntryCommand.js';

export class UpdateConclusionCommand extends UpdateEntryCommand {
    public execute(): void {
        this.updateTextField('conclusion');
    }
}
