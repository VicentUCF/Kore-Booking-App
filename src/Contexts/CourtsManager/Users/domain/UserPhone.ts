import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
export class UserPhone extends StringValueObject {
  constructor(value: string) {
    //if value is not a phone number trhow new error
    if (!value.match(/^[0-9]{9}$/)) {
      throw new Error('UserPhone is not valid');
    }

    super(value);
  }
}
