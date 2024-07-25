class Violation {
    readonly propertyName: string;
    readonly message: string;

    public constructor(propertyName : string, message: string) {
        this.propertyName = propertyName;
        this.message = message;
    }
}

export default Violation;