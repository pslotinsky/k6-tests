export abstract class Command<T = any> {
    protected data: T;

    constructor(data: T = null) {
        this.data = data;
    }

    abstract execute(): void;
}
