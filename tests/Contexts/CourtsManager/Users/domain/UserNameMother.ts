import { UserName } from "../../../../../src/Contexts/CourtsManager/Users/domain/UserName";
import { WordMother } from "../../../Shared/domain/WordMother";

export class UserNameMother {
  static create(value: string): UserName {
    return new UserName(value);
  }

  static random(): UserName {
    return this.create(WordMother.random({ maxLength: 7, minLength: 3}));
  }
}
