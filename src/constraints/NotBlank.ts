import ConstraintInterface from "./ConstraintInterface";

class NotBlank implements ConstraintInterface {
    validate(data: string|number): boolean {
        if (typeof data === 'undefined') {
            return false;
        }

        if (data === null) {
            return false;
        }

        if (typeof data === 'number' && data === 0) {
            return false;
        }

        if (typeof data === 'string' && data.length === 0) {
            return false;
        }

        return true;
    }

    getErrorMessage(): string {
        return "The value must not be empty.";
    }
}

export default NotBlank;