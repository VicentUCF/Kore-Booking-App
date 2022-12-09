import { Request, Response } from 'express';
import { Controller } from '../Controller';
import { QueryBus } from '../../../../../Contexts/Shared/domain/QueryBus';
import { BookingsResponse } from '../../../../../Contexts/CourtsManager/Bookings/application/SearchAll/BookingsResponse';
import httpStatus from 'http-status';
import { SearchBookingsByCriteriaQuery } from '../../../../../Contexts/CourtsManager/Bookings/application/SearchByCriteria/SearchBookingsByCriteriaQuery';
import { CriteriaFilterService, FilterType } from '../../services/filter/CriteriaFilterService';

export class BookingGetController implements Controller {
  constructor(private readonly queryBus: QueryBus) {}

  async run(_req: Request, res: Response) {
    const { query: queryParams } = _req;
    const { filters, orderBy, order, limit, offset } = queryParams;

    const query = new SearchBookingsByCriteriaQuery(
      CriteriaFilterService.parseFilters(filters as Array<FilterType>),
      orderBy as string,
      order as string,
      limit ? Number(limit) : undefined,
      offset ? Number(offset) : undefined
    );
    try {
      const response = await this.queryBus.ask<BookingsResponse>(query);
      res.status(httpStatus.OK).send(response.bookings);
    } catch (e) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
