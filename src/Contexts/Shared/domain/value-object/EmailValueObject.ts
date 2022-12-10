import { ValueObject } from './ValueObject';
import { InvalidEmail } from '../errors/email/InvalidEmail';

export abstract class EmailValueObject extends ValueObject<string> {
  protected constructor(value: string) {
    super(value);
  }

  static create(value: string): EmailValueObject {
    if (value.length === 0) {
      throw new Error('Email can not be empty');
    }
    if (value.length > 255) {
      throw new Error('Email can not be longer than 255 characters');
    }
    if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      throw new InvalidEmail(value);
    }
    return new (class extends EmailValueObject {})(value);
  }
}
