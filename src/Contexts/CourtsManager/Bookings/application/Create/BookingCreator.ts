import { BookingRepository } from '../../domain/BookingRepository';
import { BookingId } from '../../domain/BookingId';
import { CourtId } from '../../domain/CourtId';
import { BookingDate } from '../../domain/BookingDate';
import { Booking } from '../../domain/Booking';
import { EventBus } from '../../../../Shared/domain/EventBus';
export class BookingCreator {
  constructor(private repository: BookingRepository, private eventBus: EventBus) {}

  async run(params: { id: BookingId; courtId: CourtId; date: BookingDate }) {
    const booking = Booking.create(params.id, params.courtId, params.date);
    await this.repository.save(booking);
    await this.eventBus.publish(booking.pullDomainEvents());
  }
}
