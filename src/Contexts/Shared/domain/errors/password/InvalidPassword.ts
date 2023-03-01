import { InvalidArgumentError } from '../../value-object/InvalidArgumentError';
export class InvalidPassword extends InvalidArgumentError {
  constructor() {
    super('The password must contains at least one uppercase letter, one lowercase letter, one number and one special character.');
  }
}
