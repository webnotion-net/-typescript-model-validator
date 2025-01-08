import ValidatableModelInterface from "./models/ValidatableModelInterface";
import Violations from "./violations/Violations";
import Violation from "./violations/Violation";
import GloballyValidatableModelInterface from "./models/GloballyValidatableModelInterface";
import ConstraintInterface from "./constraints/ConstraintInterface";

class Validator {
    validate(data: ValidatableModelInterface | GloballyValidatableModelInterface): Violations {
        const violations: Violation[] = [];

        if (this.isValidatableModel(data)) {
            for (const [propertyName, constraints] of Object.entries(data?.getConstraints())) {
                for (const constraint of constraints) {
                    if (!constraint.validate((data as any)[propertyName])) {
                        const violation = new Violation(
                            propertyName,
                            constraint.getErrorMessage()
                        );
                        violations.push(violation);
                    }
                }
            }
        }

        if (this.isGloballyValidatableModel(data)) {
            for (const [key, constraint] of Object.entries(data?.getGlobalConstraints())) {
                if (!constraint.validate(data)) {
                    const violation = new Violation(
                        null,
                        constraint.getErrorMessage()
                    );
                    violations.push(violation);
                }
            }
        }

        return new Violations(violations);
    }

    validatePlain(data: object, constraints: { [key: string]: ConstraintInterface[] }): Violations {
        const violations: Violation[] = [];

        for (const [propertyName, propertyConstraints] of Object.entries(constraints)) {
            for (const constraint of propertyConstraints) {
                if (!constraint.validate((data as any)[propertyName])) {
                    const violation = new Violation(
                        propertyName,
                        constraint.getErrorMessage()
                    );
                    violations.push(violation);
                }
            }
        }

        return new Violations(violations);
    }

    validateProperty(
        propertyName: string,
        data: string | number,
        constraints: ConstraintInterface[]
    ): Violations {
        const violations: Violation[] = [];

        constraints.forEach((constraint: ConstraintInterface) => {
            if (!constraint.validate(data)) {
                const violation = new Violation(
                    propertyName,
                    constraint.getErrorMessage()
                );
                violations.push(violation);
            }
        });

        return new Violations(violations);
    }

    private isValidatableModel(
        data: ValidatableModelInterface | GloballyValidatableModelInterface
    ): data is ValidatableModelInterface {
        return (data as ValidatableModelInterface).getConstraints !== undefined;
    }

    private isGloballyValidatableModel(
        data: ValidatableModelInterface | GloballyValidatableModelInterface
    ): data is GloballyValidatableModelInterface {
        return (data as GloballyValidatableModelInterface).getGlobalConstraints !== undefined;
    }
}

export default Validator;