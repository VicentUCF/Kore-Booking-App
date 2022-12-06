import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { BookingsResponse } from './BookingsResponse';
import { BookingsFinder } from './BookingsFinder';
import { Query } from '../../../../Shared/domain/Query';
import { SearchAllBookingsQuery } from './SearchAllBookingsQuery';

export class SearchAllBookingsQueryHandler implements QueryHandler<SearchAllBookingsQuery, BookingsResponse> {
  constructor(private readonly bookingsFinder: BookingsFinder) {}

  subscribedTo(): Query {
    return new SearchAllBookingsQuery;
  }

  async handle(_query: SearchAllBookingsQuery): Promise<BookingsResponse> {
    return await this.bookingsFinder.run();
  }
}
