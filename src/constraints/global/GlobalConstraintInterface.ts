import GloballyValidatableModelInterface from "../../models/GloballyValidatableModelInterface";

interface GlobalConstraintInterface {
    validate(data: GloballyValidatableModelInterface): boolean;
    getErrorMessage(): string;
}

export default GlobalConstraintInterface;