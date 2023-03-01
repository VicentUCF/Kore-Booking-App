import { StringValueObject } from './StringValueObject';
import { InvalidPassword } from '../errors/password/InvalidPassword';
import { PasswordLengthExceeded } from '../errors/password/PasswordLengthExceeded';
import { PasswordLengthUnderNeed } from '../errors/password/PasswordLengthUnderNeed';
export abstract class PasswordValueObject extends StringValueObject {
  constructor(value: string) {
    if (value.length < 8) {
      throw new PasswordLengthUnderNeed();
    }
    if (value.length > 20) {
      throw new PasswordLengthExceeded();
    }

    if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
      throw new InvalidPassword();
    }

    super(value);
  }
}
