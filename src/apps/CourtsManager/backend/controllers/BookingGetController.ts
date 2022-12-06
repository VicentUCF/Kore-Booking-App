import { Request, Response } from 'express';
import { Controller } from './Controller';
import { QueryBus } from '../../../../Contexts/Shared/domain/QueryBus';
import { BookingsResponse } from '../../../../Contexts/CourtsManager/Bookings/application/SearchAll/BookingsResponse';
import httpStatus from 'http-status';
import { SearchBookingsByCriteriaQuery } from '../../../../Contexts/CourtsManager/Bookings/application/SearchByCriteria/SearchBookingsByCriteriaQuery';

type FilterType = { value: string; operator: string; field: string };

export class BookingGetController implements Controller {
  constructor(private readonly queryBus: QueryBus) {}

  async run(_req: Request, res: Response) {
    const { query: queryParams } = _req;
    const { filters, orderBy, order, limit, offset } = queryParams;

    const query = new SearchBookingsByCriteriaQuery(
      this.parseFilters(filters as Array<FilterType>),
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

  private parseFilters(params: Array<FilterType>): Array<Map<string, string>> {
    if (!params) {
      return new Array<Map<string, string>>();
    }

    return params.map(filter => {
      const field = filter.field;
      const value = filter.value;
      const operator = filter.operator;

      return new Map([
        ['field', field],
        ['operator', operator],
        ['value', value]
      ]);
    });
  }
}
