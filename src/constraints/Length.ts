import ConstraintInterface from "./ConstraintInterface";

class Length implements ConstraintInterface
{
    min: number;
    max?: number;

    public constructor(min: number, max?: number) {
        this.min = min;
        this.max = max;
    }

    validate(data: string): boolean {
        if (typeof data == 'undefined') {
            return false;
        }

        if (data.length < this.min) {
            return false;
        }

        if (this.max && data.length > this.max) {
            return false;
        }

        return true;
    }

    getErrorMessage(): string {
        return `Length must be between ${this.min} and ${this.max}`;
    }
}

export default Length;