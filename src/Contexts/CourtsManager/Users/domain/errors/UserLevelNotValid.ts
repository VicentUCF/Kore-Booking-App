import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError';
export class UserLevelNotValid extends InvalidArgumentError {
  constructor() {
    super(`The user level must be number between 1 and 7 (included)`);
  }
}
