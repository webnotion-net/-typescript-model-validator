import GlobalConstraintInterface from "../constraints/global/GlobalConstraintInterface";

interface GloballyValidatableModelInterface {
    getGlobalConstraints(): GlobalConstraintInterface[];
}

export default GloballyValidatableModelInterface;