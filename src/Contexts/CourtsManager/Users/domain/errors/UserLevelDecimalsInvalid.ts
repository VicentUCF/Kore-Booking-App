import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError';
export class UserLevelDecimalsNotValid extends InvalidArgumentError {
  constructor() {
    super('Level decimals must be 0.25, 0.5 or 0.75');
  }
}
