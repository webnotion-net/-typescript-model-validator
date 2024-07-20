import ValidatableModelInterface from "./models/ValidatableModelInterface";
import Violation from "./violations/Violation";
import ConstraintInterface from "./constraints/ConstraintInterface";

class Validator {
    validate(data: ValidatableModelInterface): Violation[] {
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

        return violations;
    }

    validateProperty(
        propertyName: string,
        data: string | number | object,
        constraints: ConstraintInterface[]
    ): Violation[] {
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

        return violations;
    }
}

export default Validator;