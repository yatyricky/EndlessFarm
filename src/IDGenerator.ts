export class IDGenerator {
    private start: int;

    public constructor(start?: number) {
        this.start = start || 0;
    }

    public get Next(): int {
        this.start++;
        return this.start;
    }

}
