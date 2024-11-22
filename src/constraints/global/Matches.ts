import GlobalConstraintInterface from "../../constraints/global/GlobalConstraintInterface";
import GloballyValidatableModelInterface from "../../models/GloballyValidatableModelInterface";

class Matches implements GlobalConstraintInterface {

    propertyName: string;
    secondPropertyName: string;

    public constructor(propertyName: string, secondPropertyName: string) {
        this.propertyName = propertyName;
        this.secondPropertyName = secondPropertyName;
    }

    validate(data: GloballyValidatableModelInterface): boolean {
        return (data as any)[this.propertyName] === (data as any)[this.secondPropertyName];
    }

    getErrorMessage(): string {
        return "The provided values doesn't match.";
    }
}

export default Matches;