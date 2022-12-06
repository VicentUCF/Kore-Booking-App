import { Given } from 'cucumber';
import container from '../../../../../../src/apps/CourtsManager/backend/dependency-injection/index';
import { Booking } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/Booking';
import { BookingDate } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingDate';
import { BookingId } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingId';
import { BookingRepository } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingRepository';
import { CourtId } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/CourtId';


const bookingRepository: BookingRepository = container.get('CourtsManager.Bookings.BookingRepository');

Given('there is the booking:', async (booking: any) => {
  const { id, courtId, date } = JSON.parse(booking);
  await bookingRepository.save(new Booking(new BookingId(id), new CourtId(courtId), new BookingDate(date)));
});
