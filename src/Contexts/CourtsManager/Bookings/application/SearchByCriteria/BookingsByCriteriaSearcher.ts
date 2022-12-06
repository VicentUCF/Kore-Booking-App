import { Criteria } from '../../../../Shared/domain/criteria/Criteria';
import { Filters } from '../../../../Shared/domain/criteria/Filters';
import { Order } from '../../../../Shared/domain/criteria/Order';
import { BookingRepository } from '../../domain/BookingRepository';
import { BookingsResponse } from '../SearchAll/BookingsResponse';


export class BookingsByCriteriaSearcher {
  constructor(private repository: BookingRepository) {}

  async run(filters: Filters, order: Order, limit?: number, offset?: number): Promise<BookingsResponse> {
    const criteria = new Criteria(filters, order, limit, offset);

    const courses = await this.repository.matching(criteria);

    return new BookingsResponse(courses);
  }
}
