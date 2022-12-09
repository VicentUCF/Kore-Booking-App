import { Request, Response } from 'express';
import { Controller } from '../Controller';
import { QueryBus } from '../../../../../Contexts/Shared/domain/QueryBus';
import { SearchCourtsByCriteriaQuery } from '../../../../../Contexts/CourtsManager/Courts/application/SearchByCriteria/SearchCourtsByCriteriaQuery';
import { CriteriaFilterService, FilterType } from '../../services/filter/CriteriaFilterService';
import httpStatus from 'http-status';
import { CourtsResponse } from '../../../../../Contexts/CourtsManager/Courts/application/SearchByCriteria/CourtsResponse';

export class CourtGetController implements Controller {
  constructor(private queryBus: QueryBus) {}

  async run(_req: Request, res: Response) {
    const { query: queryParams } = _req;
    const { filters, orderBy, order, limit, offset } = queryParams;

    const query = new SearchCourtsByCriteriaQuery(
      CriteriaFilterService.parseFilters(filters as Array<FilterType>),
      orderBy as string,
      order as string,
      limit ? Number(limit) : undefined,
      offset ? Number(offset) : undefined
    );

    try {
      const response = await this.queryBus.ask<CourtsResponse>(query);
      res.status(httpStatus.OK).send(response.courts);
    } catch (e) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
