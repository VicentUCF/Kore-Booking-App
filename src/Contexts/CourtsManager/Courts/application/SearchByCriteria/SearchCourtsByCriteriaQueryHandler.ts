import { CourtsByCriteriaSearcher } from './CourtsByCriteriaSearcher';
import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { SearchCourtsByCriteriaQuery } from './SearchCourtsByCriteriaQuery';
import { Query } from '../../../../Shared/domain/Query';
import { Filters } from '../../../../Shared/domain/criteria/Filters';
import { Order } from '../../../../Shared/domain/criteria/Order';
import { CourtsResponse } from './CourtsResponse';

export class SearchCourtsByCriteriaQueryHandler implements QueryHandler<SearchCourtsByCriteriaQuery, CourtsResponse> {
  constructor(private searcher: CourtsByCriteriaSearcher) {}

  subscribedTo(): Query {
    return SearchCourtsByCriteriaQuery;
  }

  async handle(query: SearchCourtsByCriteriaQuery): Promise<CourtsResponse> {
    const filters = Filters.fromValues(query.filters);
    const order = Order.fromValues(query.orderBy, query.orderType);

    return this.searcher.run(filters, order, query.offset, query.limit);
  }
}
