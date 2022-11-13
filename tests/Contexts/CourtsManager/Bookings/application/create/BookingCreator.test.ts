import { BookingRepositoryMock } from '../../__mocks__/BookingRepositoryMock';
import { BookingCreator } from '../../../../../../src/Contexts/CourtsManager/Bookings/application/Create/BookingCreator';
import { CreateBookingCommandHandler } from '../../../../../../src/Contexts/CourtsManager/Bookings/application/Create/CreateBookingCommandHandler';
import EventBusMock from '../../../Shared/EventBusMock';
import { BookingMother } from '../../domain/BookingMother';
import { CreateBookingCommandMother } from './CreateBookingCommandMother';
import { BookingCreatedDomainEventMother } from '../../domain/CourseCreatedDomainEventMother';

let repository: BookingRepositoryMock;
let creator: BookingCreator;
let eventBus: EventBusMock;
let handler: CreateBookingCommandHandler;

beforeEach(() => {
  repository = new BookingRepositoryMock();
  eventBus = new EventBusMock();
  creator = new BookingCreator(repository, eventBus);
  handler = new CreateBookingCommandHandler(creator);
});

describe('CourtsManagerBookingCreator', () => {
  it('should create a valid Booking', async () => {
    const command = CreateBookingCommandMother.random();
    const course = BookingMother.from(command);
    const domainEvent = BookingCreatedDomainEventMother.fromBooking(course);

    await handler.handle(command);

    repository.assertSaveHasBeenCalledWith(course);
    eventBus.assertLastPublishedEventIs(domainEvent);
  });
});
