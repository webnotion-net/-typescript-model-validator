# Data Model Validator Library

The library provides a flexible and extensible framework for validating data models in TypeScript. 
It supports defining validation constraints for model properties and can validate both entire models and individual properties.
The library is designed to help ensure data integrity and enforce business rules in your application.

## Features
- **Model Validation**: Validate entire data models against a set of constraints.
- **Property Validation**: Validate individual properties with specific constraints.
- **Custom Constraints**: Define your own validation constraints.
- **Built-in Constraints**: Includes common constraints like `NotBlank` and `Length`.
- **Error Reporting**: Provides detailed violation messages for invalid data.

## Use Cases

### Ensuring Data Integrity
When collecting data from users, it's crucial to ensure that the data meets specific requirements before processing or storing it.
The library helps enforce these rules consistently across your application.

### Enforcing Business Rules
For business applications, certain fields must comply with specific rules (e.g., a title must not be empty, an amount must be a positive number). This library ensures these rules are adhered to, reducing the risk of data-related errors.

## Installation

#### Using npm:
```typescript
npm install validator-library
```

#### Using yarn:
```typescript
yarn add validator-library
```

## Usage

### Built-in Constraints
- **NotBlank** - Ensures a value is not empty.
- **Length** - Ensures a string's length is within a specified range.

### Creating Validatable Model & Applying Constraints
Implement the ValidatableModelInterface in your data model class.

#### Example: User Model

```typescript
import {ConstraintInterface, ValidatableModelInterface} from "@webnotion-net/typescript-model-validator";
import NotBlank from "@webnotion-net/typescript-model-validator/dist/constraints/NotBlank";

class User implements ValidatableModelInterface {
    name: string;
    email: string;
    password: string;

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
    }

    getConstraints(): { [key: string]: ConstraintInterface[] } {
        return {
            name: [new NotBlank()],
            email: [new NotBlank(), new Email()],
            password: [new NotBlank(), new Length(6, 128)],
        };
    }
}

export default User;
```

### Validating Data
Use the `Validator` class to validate your models and properties.

#### Example: Validating a Model

```typescript
import {Validator} from "@webnotion-net/typescript-model-validator";
import User from "@/models/User";

const user = new User();
user.name = '';  // Invalid data
user.email = ''; // Invalid data

const validator = new Validator();
const violations = validator.validate(user);

// Further processing of returned violations
```

#### Example: Validating a Property

```typescript
import {Validator} from "@webnotion-net/typescript-model-validator";
import NotBlank from "@webnotion-net/typescript-model-validator/dist/constraints/NotBlank";

const name = '';
const validator = new Validator();
const nameViolations = validator.validateProperty('name', name, [new NotBlank()]);

// Further processing of returned violations
```

### Custom Constraints
You can create custom constraints by implementing the ConstraintInterface.

#### Example: Custom Constraint

```typescript
import {ConstraintInterface} from "@webnotion-net/typescript-model-validator";

class IsPositive implements ConstraintInterface {
    validate(data: number): boolean {
        return data > 0;
    }

    getErrorMessage(): string {
        return "The value must be positive.";
    }
}

export default IsPositive;
```

### Best Practices
1. Define Constraints Clearly: Ensure constraints are well-defined and cover all necessary validation rules for your application.
2. Reuse Constraints: Create reusable constraints for common validation rules to maintain consistency.
3. Handle Violations: Properly handle and display validation errors to users, providing clear and actionable messages.

### Contribution
Contributions are welcome! Please submit a pull request or open an issue on GitLab.

### License
This library is licensed under the MIT License.