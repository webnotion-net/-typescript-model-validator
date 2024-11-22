interface ConstraintInterface {
    validate(data: string | number): boolean;
    getErrorMessage(): string;
}

export default ConstraintInterface;