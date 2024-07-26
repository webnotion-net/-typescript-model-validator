import ValidatableModelInterface from "./models/ValidatableModelInterface";
import Violations from "./violations/Violations";
import ConstraintInterface from "./constraints/ConstraintInterface";
import Violation from "./violations/Violation";

class Validator {
    validate(data: ValidatableModelInterface): Violations {
        const violations: Violation[] = [];

        for (const [propertyName, constraints] of Object.entries(data.getConstraints())) {
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

        return new Violations(violations);
    }

    validateProperty(
        propertyName: string,
        data: string | number | object,
        constraints: ConstraintInterface[]
    ): Violations {
        const violations: Violation[] = [];

        constraints.forEach((constraint: ConstraintInterface) => {
            // @ts-ignore
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
}

export default Validator;