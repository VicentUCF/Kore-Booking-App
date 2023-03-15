import { NumberValueObject } from '../../../Shared/domain/value-object/IntValueObject';
import { UserLevelDecimalsNotValid } from './errors/UserLevelDecimalsInvalid';
import { UserLevelNotValid } from './errors/UserLevelNotValid';

const validIntNumbers = [1, 2, 3, 4, 5, 6, 7];
const validDecimalsNumbers = [25, 0.5, 0.75];

export class UserLevel extends NumberValueObject {
  constructor(value: number) {
    const numArray = value.toString().split('.');
    const num = Number(numArray[0]);
    const decimal = numArray[1];

    if (value > 7 || value < 1 || (num && !validIntNumbers.includes(num))) {
      throw new UserLevelNotValid();
    }

    if (decimal && !validDecimalsNumbers.includes(Number(decimal))) {
      throw new UserLevelDecimalsNotValid();
    }

    super(value);
  }
}
