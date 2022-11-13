import { DateValueObject } from '../../../Shared/domain/value-object/DateValueObject';
export class BookingDate extends DateValueObject {
  constructor(date: Date) {
    super(date);
  }
}
