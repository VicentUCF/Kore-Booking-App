import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError';

export class UserPhoneNotValid extends InvalidArgumentError {
  constructor(){
    super(`The phone number is not valid (must be 9 digits)`);
  }
}
