import ConstraintInterface from "./ConstraintInterface";

class Min implements ConstraintInterface
{
    min: number;

    public constructor(min: number) {
        this.min = min;
    }

    validate(data: string): boolean {
        if (typeof data == 'undefined') {
            return false;
        }

        return data.length > this.min;
    }

    getErrorMessage(): string {
        return `Length must be at least ${this.min} characters`;
    }
}

export default Min;