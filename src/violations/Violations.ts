import Violation from "./Violation";

class Violations {
    violations: Violation[];

    public constructor(violations: Violation[] = []) {
        this.violations = violations;
    }

    public addViolation(violation: Violation) {
        this.violations.push(violation);
    }

    public get(propertyName: string): Violation[] {
        return this.violations.filter((violation) => violation.propertyName === propertyName);
    }

    public isEmpty(propertyName: string): boolean {
        return this.violations.length === 0;
    }
}

export default Violations;