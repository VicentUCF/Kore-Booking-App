import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { UserNameLengthExceeded } from './errors/UserNameLengthExceeded';
import { UserNameLengthUnderNeed } from './errors/UserNameLengthUnderNeed';

export class UserName extends StringValueObject {
  constructor(value: string) {
    if(value.length > 10) {
      throw new UserNameLengthExceeded();
    }

    if(value.length < 3) {
      throw new UserNameLengthUnderNeed();
    }

    super(value);
  }
}
