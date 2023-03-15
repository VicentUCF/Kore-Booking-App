import { User } from '../../../../../src/Contexts/CourtsManager/Users/domain/User';
import { UserEmail } from '../../../../../src/Contexts/CourtsManager/Users/domain/UserEmail';
import { UserId } from '../../../../../src/Contexts/CourtsManager/Users/domain/UserId';
import { UserLevel } from '../../../../../src/Contexts/CourtsManager/Users/domain/UserLevel';
import { UserName } from '../../../../../src/Contexts/CourtsManager/Users/domain/UserName';
import { UserPhone } from '../../../../../src/Contexts/CourtsManager/Users/domain/UserPhone';
import { UserEmailMother } from './UserEmailMother';
import { UserIdMother } from './UserIdMother';
import { UserLevelMother } from './UserLevelCreator';
import { UserNameMother } from './UserNameMother';
import { UserPhoneMother } from './UserPhoneMother';

export class UserMother {
  static create({
    id,
    name,
    email,
    level,
    phone
  }: {
    id: UserId;
    name: UserName;
    email: UserEmail;
    level: UserLevel;
    phone?: UserPhone;
  }): User {
    return new User({ id, name, email, level, phone });
  }

  static random(): User {
    return this.create({
      id: UserIdMother.random(),
      name: UserNameMother.random(),
      email: UserEmailMother.random(),
      level: UserLevelMother.random(),
      phone: UserPhoneMother.random()
    });
  }

  static from(command: { id: string; name: string; email: string; level: number; phone?: string }): User {
    return this.create({
      id: UserIdMother.create(command.id),
      name: UserNameMother.create(command.name),
      email: UserEmailMother.create(command.email),
      level: UserLevelMother.create(command.level),
      phone: UserPhoneMother.create(command.phone)
    });
  }
}
