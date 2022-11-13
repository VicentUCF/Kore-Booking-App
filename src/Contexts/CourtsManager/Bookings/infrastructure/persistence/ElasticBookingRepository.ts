import { Criteria } from '../../../../Shared/domain/criteria/Criteria';
import { ElasticRepository } from '../../../../Shared/infrastructure/persistence/elasticsearch/ElasticRepository';
import { Booking } from '../../domain/Booking';
import { BookingRepository } from '../../domain/BookingRepository';

export class ElasticBackofficeBookingRepository
  extends ElasticRepository<Booking>
  implements BookingRepository {
  async searchAll(): Promise<Booking[]> {
    return this.searchAllInElastic(Booking.fromPrimitives);
  }

  async save(booking: Booking): Promise<void> {
    return this.persist(booking.id.value, booking);
  }

  async matching(criteria: Criteria): Promise<Booking[]> {
    return this.searchByCriteria(criteria, Booking.fromPrimitives);
  }
}
