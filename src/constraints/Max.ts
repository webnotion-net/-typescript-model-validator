import ConstraintInterface from "./ConstraintInterface";

class Max implements ConstraintInterface
{
    max: number;

    public constructor(max: number) {
        this.max = max;
    }

    validate(data: string): boolean {
        if (typeof data == 'undefined') {
            return false;
        }

        return data.length > this.max;
    }

    getErrorMessage(): string {
        return `Length must be less than ${this.max} characters`;
    }
}

export default Max;