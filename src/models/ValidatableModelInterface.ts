import ConstraintInterface from "../constraints/ConstraintInterface";

interface ValidatableModelInterface {
    getConstraints(): { [key: string]: ConstraintInterface[] };
}

export default ValidatableModelInterface;