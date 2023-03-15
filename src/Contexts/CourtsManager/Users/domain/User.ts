import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { UserId } from './UserId';
import { UserName } from './UserName';
import { UserEmail } from './UserEmail';
import { UserLevel } from './UserLevel';
import { UserPhone } from './UserPhone';

export interface UserPrimitive {
  id: string;
  name: string;
  email: string;
  level: number;
  phone?: string;
}

export class User extends AggregateRoot {
  readonly id: UserId;
  readonly name: UserName;
  readonly email: UserEmail;
  readonly level: UserLevel;
  readonly phone?: UserPhone;

  constructor({
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
  }) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.level = level;
    this.phone = phone;
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
      level: this.level.value,
      phone: this.phone?.value
    };
  }

  static fromPrimitives({
    id,
    name,
    email,
    level,
    phone
  }: {
    id: string;
    name: string;
    email: string;
    level: number;
    phone?: string;
  }) {
    return new User({
      id: new UserId(id),
      name: new UserName(name),
      email: new UserEmail(email),
      level: new UserLevel(level),
      phone: phone ? new UserPhone(phone) : undefined
    });
  }
}
