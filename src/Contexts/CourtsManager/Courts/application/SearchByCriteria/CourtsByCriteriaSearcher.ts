import { CourtRepository } from '../../domain/CourtRepository';
import { Filters } from '../../../../Shared/domain/criteria/Filters';
import { Order } from '../../../../Shared/domain/criteria/Order';
import { Criteria } from '../../../../Shared/domain/criteria/Criteria';
import { CourtsResponse } from './CourtsResponse';
export class CourtsByCriteriaSearcher {
  constructor(private repository: CourtRepository) {}

  async run(filters: Filters, order: Order, limit?: number, offset?: number): Promise<CourtsResponse> {
    const criteria = new Criteria(filters, order, limit, offset);

    const courses = await this.repository.matching(criteria);

    return new CourtsResponse(courses);
  }
}
