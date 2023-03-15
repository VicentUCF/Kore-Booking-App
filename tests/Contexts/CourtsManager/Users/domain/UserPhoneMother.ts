import { UserPhone } from "../../../../../src/Contexts/CourtsManager/Users/domain/UserPhone";
import { MotherCreator } from "../../../Shared/domain/MotherCreator";

export class UserPhoneMother {
  static create(value: string | undefined): UserPhone | undefined {
    return value ? new UserPhone(value) : undefined;
  }

  static random(): UserPhone {
    const phone = MotherCreator.random().phone.phoneNumber("#########").toString();
    return this.create(phone) as UserPhone;
  }
}
