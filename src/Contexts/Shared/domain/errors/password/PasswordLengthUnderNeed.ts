import { InvalidArgumentError } from '../../value-object/InvalidArgumentError';
export class PasswordLengthUnderNeed extends InvalidArgumentError {
  constructor() {
    super(`The password length is under the need`);
  }
}
