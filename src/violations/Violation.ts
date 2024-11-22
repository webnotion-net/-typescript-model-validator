class Violation {
    readonly propertyName: string | null;
    readonly message: string;

    public constructor(propertyName: string | null, message: string) {
        this.propertyName = propertyName;
        this.message = message;
    }
}

export default Violation;