import { Required, RequiredString } from './required';
import { Validator } from './validator';

export class ValidationBuilder {
  private constructor(
    private readonly value: any,
    private readonly fieldName?: string,
    private readonly validators: Validator[] = [],
  ) {}

  static of({
    value,
    fieldName,
  }: {
    value: any;
    fieldName?: string;
  }): ValidationBuilder {
    return new ValidationBuilder(value, fieldName);
  }

  required(): ValidationBuilder {
    if (typeof this.value === 'string') {
      this.validators.push(new RequiredString(this.value, this.fieldName));
    } else if (typeof this.value === 'object') {
      this.validators.push(new Required(this.value, this.fieldName));
      if (this.value.buffer !== undefined) {
        this.validators.push(new Required(this.value.buffer, this.fieldName));
      }
    } else {
      this.validators.push(new Required(this.value, this.fieldName));
    }
    return this;
  }

  build(): Validator[] {
    return this.validators;
  }
}
