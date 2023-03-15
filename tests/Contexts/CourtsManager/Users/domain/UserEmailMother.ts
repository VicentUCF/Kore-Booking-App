import { UserEmail } from '../../../../../src/Contexts/CourtsManager/Users/domain/UserEmail';
import { MotherCreator } from '../../../Shared/domain/MotherCreator';

export class UserEmailMother {
  static create(value: string): UserEmail {
    return new UserEmail(value);
  }

  static random(): UserEmail {
    return this.create(MotherCreator.random().internet.email());
  }
}
