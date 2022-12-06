import { OrderTypes } from '../../../../../../src/Contexts/Shared/domain/criteria/OrderType';
import { BookingMother } from '../../domain/BookingMother';
import { SearchBookingsByCriteriaQueryHandler } from '../../../../../../src/Contexts/CourtsManager/Bookings/application/SearchByCriteria/SearchBookingsByCriteriaQueryHandler';
import { BookingsByCriteriaSearcher } from '../../../../../../src/Contexts/CourtsManager/Bookings/application/SearchByCriteria/BookingsByCriteriaSearcher';
import { SearchBookingsByCriteriaQuery } from '../../../../../../src/Contexts/CourtsManager/Bookings/application/SearchByCriteria/SearchBookingsByCriteriaQuery';
import { SearchBookingsByCriteriaResponseMother } from '../../domain/SearchBookingsByCriteriaResponseMother';
import { BookingRepositoryMock } from '../../__mocks__/BookingRepositoryMock';
import { Operator } from '../../../../../../src/Contexts/Shared/domain/criteria/FilterOperator';

describe('SearchAllBookings QueryHandler', () => {
  let repository: BookingRepositoryMock;

  beforeEach(() => {
    repository = new BookingRepositoryMock();
  });


  it('should return all bookings if no filters are provided', async () => {

    const bookings = [BookingMother.random(), BookingMother.random(), BookingMother.random()];
    repository.returnMatching(bookings);

    const handler = new SearchBookingsByCriteriaQueryHandler(new BookingsByCriteriaSearcher(repository));

    const query = new SearchBookingsByCriteriaQuery([]);
    const response = await handler.handle(query);

    const expected = SearchBookingsByCriteriaResponseMother.create(bookings);

    repository.assertMatchingHasBeenCalledWith();
    expect(expected).toEqual(response);
    expect(response.bookings).toHaveLength(3);
  });


  it('should find bookings filter by criteria', async () => {
    const bookings = [BookingMother.random(), BookingMother.random(), BookingMother.random()];
    repository.returnMatching(bookings);

    const handler = new SearchBookingsByCriteriaQueryHandler(new BookingsByCriteriaSearcher(repository));

    const filterId: Map<string, string> = new Map([
      ['field', 'courtId'],
      ['operator', Operator.EQUAL],
      ['value', bookings[0].courtId.toString()]
    ]);

    const filters: Array<Map<string, string>> = new Array(filterId);
    const query = new SearchBookingsByCriteriaQuery(filters);
    const response = await handler.handle(query);

    const expected = SearchBookingsByCriteriaResponseMother.create(bookings);
    repository.assertMatchingHasBeenCalledWith();
    expect(expected).toEqual(response);
  });


  it('should find bookings filter by criteria with order, limit and offset', async () => {
    const bookings = [BookingMother.random(), BookingMother.random(), BookingMother.random()];
    repository.returnMatching(bookings);

    const handler = new SearchBookingsByCriteriaQueryHandler(new BookingsByCriteriaSearcher(repository));

    const filterName: Map<string, string> = new Map([
      ['field', 'name'],
      ['operator', Operator.CONTAINS],
      ['value', 'DDD']
    ]);
    const filterDuration: Map<string, string> = new Map([
      ['field', 'duration'],
      ['operator', Operator.CONTAINS],
      ['value', 'minutes']
    ]);

    const filters: Array<Map<string, string>> = new Array(filterName, filterDuration);
    const orderBy = 'name';
    const orderType = OrderTypes.ASC;

    const query = new SearchBookingsByCriteriaQuery(filters, orderBy, orderType, 10, 1);
    const response = await handler.handle(query);

    const expected = SearchBookingsByCriteriaResponseMother.create(bookings);
    repository.assertMatchingHasBeenCalledWith();
    expect(expected).toEqual(response);
  });
});
