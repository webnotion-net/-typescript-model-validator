import ConstraintInterface from "./ConstraintInterface";

class Email implements ConstraintInterface {
    validate(email: string): boolean {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        return emailRegex.test(email);
    }

    getErrorMessage(): string {
        return "The provided email is invalid. Please double-check and try again.";
    }
}

export default Email;