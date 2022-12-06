import { Filters } from '../../../../Shared/domain/criteria/Filters';
import { Order } from '../../../../Shared/domain/criteria/Order';
import { Query } from '../../../../Shared/domain/Query';
import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { SearchBookingsByCriteriaQuery } from './SearchBookingsByCriteriaQuery';
import { BookingsResponse } from '../SearchAll/BookingsResponse';
import { BookingsByCriteriaSearcher } from './BookingsByCriteriaSearcher';

export class SearchBookingsByCriteriaQueryHandler
  implements QueryHandler<SearchBookingsByCriteriaQuery, BookingsResponse> {
  constructor(private searcher: BookingsByCriteriaSearcher) {}

  subscribedTo(): Query {
    return SearchBookingsByCriteriaQuery;
  }

  handle(query: SearchBookingsByCriteriaQuery): Promise<BookingsResponse> {
    const filters = Filters.fromValues(query.filters);
    const order = Order.fromValues(query.orderBy, query.orderType);

    return this.searcher.run(filters, order, query.offset, query.limit);
  }
}
