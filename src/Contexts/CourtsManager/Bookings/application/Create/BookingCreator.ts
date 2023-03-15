import { BookingRepository } from '../../domain/BookingRepository';
import { BookingId } from '../../domain/BookingId';
import { BookingDate } from '../../domain/BookingDate';
import { Booking } from '../../domain/Booking';
import { EventBus } from '../../../../Shared/domain/EventBus';
import { Court } from '../../../Courts/domain/Court';
import { User } from '../../../Users/domain/User';
export class BookingCreator {
  constructor(private repository: BookingRepository, private eventBus: EventBus) {}

  async run(params: { id: BookingId; user: User; court: Court; date: BookingDate }) {
    const booking = Booking.create({ id: params.id, court: params.court, user: params.user, date: params.date });
    await this.repository.save(booking);
    await this.eventBus.publish(booking.pullDomainEvents());
  }
}
