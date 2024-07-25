import ValidatableModelInterface from "../models/ValidatableModelInterface";

class ModelUpdaterUtils {
    static update(data: ValidatableModelInterface, propertyName: string, newValue: any): ValidatableModelInterface {
        const clonedModel = Object.create(Object.getPrototypeOf(data), Object.getOwnPropertyDescriptors(data));
        clonedModel[propertyName] = newValue;

        return clonedModel;
    }
}

export default ModelUpdaterUtils;