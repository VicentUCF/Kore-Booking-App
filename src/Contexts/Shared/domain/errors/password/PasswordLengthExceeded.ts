import { InvalidArgumentError } from '../../value-object/InvalidArgumentError';
export class PasswordLengthExceeded extends InvalidArgumentError {
  constructor() {
    super(`The password length is exceeded`);
  }
}
