import { InvalidArgumentError } from '../../value-object/InvalidArgumentError';
export class InvalidEmail extends InvalidArgumentError {
  constructor(email: string) {
    super(`The email <${email}> is not valid`);
  }
}
