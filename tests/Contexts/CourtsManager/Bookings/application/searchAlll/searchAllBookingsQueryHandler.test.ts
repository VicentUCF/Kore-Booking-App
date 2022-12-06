import { BookingRepositoryMock } from '../../__mocks__/BookingRepositoryMock';
import { BookingMother } from '../../domain/BookingMother';
import { SearchAllBookingsQueryHandler } from '../../../../../../src/Contexts/CourtsManager/Bookings/application/SearchAll/SearchAllBookingsQueryHandler';
import { BookingsFinder } from '../../../../../../src/Contexts/CourtsManager/Bookings/application/SearchAll/BookingsFinder';
import { SearchAllBookingsResponseMother } from './SearchAllBookingsResponseMother';
import { SearchAllBookingsQuery } from '../../../../../../src/Contexts/CourtsManager/Bookings/application/SearchAll/SearchAllBookingsQuery';

describe('SearchAllCourses QueryHandler', () => {
  let repository: BookingRepositoryMock;

  beforeEach(() => {
    repository = new BookingRepositoryMock();
  });

  it('should find an existing courses', async () => {
    const courses = [BookingMother.random(), BookingMother.random(), BookingMother.random()];
    repository.returnOnSearchAll(courses);

    // const handler = new SearchAllCoursesQueryHandler(new CoursesFinder(repository));
    const handler = new SearchAllBookingsQueryHandler(new BookingsFinder(repository));

    const query = new SearchAllBookingsQuery();
    const response = await handler.handle(query);

    repository.assertSearchAll();

    const expected = SearchAllBookingsResponseMother.create(courses);
    expect(expected).toEqual(response);
  });
});
