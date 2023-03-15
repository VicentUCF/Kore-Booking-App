import { UserLevel } from '../../../../../src/Contexts/CourtsManager/Users/domain/UserLevel';
import { MotherCreator } from '../../../Shared/domain/MotherCreator';

export class UserLevelMother {
  static create(value: number): UserLevel {
    return new UserLevel(value);
  }

  static random(): UserLevel {
    return this.create(
      MotherCreator.random().datatype.number({
        min: 1,
        max: 7,
      })
    );
  }
}
