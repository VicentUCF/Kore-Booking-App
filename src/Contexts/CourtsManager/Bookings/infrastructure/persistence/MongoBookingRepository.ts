import { Criteria } from '../../../../Shared/domain/criteria/Criteria';
import { Nullable } from '../../../../Shared/domain/Nullable';
import { MongoRepository } from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { Booking } from '../../domain/Booking';
import { BookingId } from '../../domain/BookingId';
import { BookingRepository } from '../../domain/BookingRepository';

interface BookingDocument extends Document {
  _id: string;
  courtId: string;
  date: Date;
}

export class MongoBookingRepository extends MongoRepository<Booking> implements BookingRepository {
  public save(booking: Booking): Promise<void> {
    return this.persist(booking.id.value, booking);
  }

  public async search(id: BookingId): Promise<Nullable<Booking>> {
    const collection = await this.collection();
    const document = await collection.findOne<BookingDocument>({ _id: id.value });

    return document ? Booking.fromPrimitives({ courtId: document.courtId, date: document.date, id: id.value }) : null;
  }

  protected collectionName(): string {
    return 'Bookings';
  }

  public async searchAll(): Promise<Booking[]> {
    const collection = await this.collection();
    const documents = await collection.find<BookingDocument>({}).toArray();
    console.log(documents);
    return documents.map(document =>
      Booking.fromPrimitives({ courtId: document.courtId, date: document.date, id: document._id })
    );
  }

  public async matching(criteria: Criteria): Promise<Booking[]> {
    const documents = await this.searchByCriteria<BookingDocument>(criteria);
    return documents.map(document =>
      Booking.fromPrimitives({ courtId: document.courtId, date: document.date, id: document._id })
    );
  }
}
