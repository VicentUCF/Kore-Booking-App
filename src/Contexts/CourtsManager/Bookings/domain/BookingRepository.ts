import { Booking } from './Booking';
import { Criteria } from '../../../Shared/domain/criteria/Criteria';

export interface BookingRepository {
  save(booking: Booking): Promise<void>;
  searchAll(): Promise<Array<Booking>>;
  matching(criteria: Criteria): Promise<Array<Booking>>;

}
