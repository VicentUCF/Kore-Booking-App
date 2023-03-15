import { Given } from 'cucumber';
import container from '../../../../../../src/apps/CourtsManager/backend/dependency-injection/index';
import { Booking } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/Booking';
import { BookingDate } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingDate';
import { BookingId } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingId';
import { BookingRepository } from '../../../../../../src/Contexts/CourtsManager/Bookings/domain/BookingRepository';
import { Court } from '../../../../../../src/Contexts/CourtsManager/Courts/domain/Court';
import { User } from '../../../../../../src/Contexts/CourtsManager/Users/domain/User';

const bookingRepository: BookingRepository = container.get('CourtsManager.Bookings.BookingRepository');

Given('there is the booking:', async (booking: any) => {
  const { id, court, user, date } = JSON.parse(booking);

  await bookingRepository.save(
    new Booking({
      id: new BookingId(id),
      court: Court.fromPrimitives(court),
      user: User.fromPrimitives(user),
      date: new BookingDate(date)
    })
  );
});
