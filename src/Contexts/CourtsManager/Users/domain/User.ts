import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { UserId } from './UserId';
import { UserName } from './UserName';
import { UserEmail } from './UserEmail';
import { UserPassword } from './UserPassword';
import { UserLevel } from './UserLevel';
import { UserPhone } from './UserPhone';

export class User extends AggregateRoot {
  readonly id: UserId;
  readonly name: UserName;
  readonly email: UserEmail;
  readonly password: UserPassword;
  readonly level: UserLevel;
  readonly phone?: UserPhone;

  constructor(
    id: UserId,
    name: UserName,
    email: UserEmail,
    password: UserPassword,
    level: UserLevel,
    phone?: UserPhone
  ) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.level = level;
    this.phone = phone;
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      level: this.level.value,
      phone: this.phone?.value,
    };
  }

  static fromPrimitives(id: string, name: string, email: string, password: string, level: number, phone?: string) {
    return new User(
      new UserId(id),
      new UserName(name),
      new UserEmail(email),
      new UserPassword(password),
      new UserLevel(level),
      phone ? new UserPhone(phone) : undefined
    );
  }
}
