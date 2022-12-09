import { Criteria } from '../../../../Shared/domain/criteria/Criteria';
import { MongoRepository } from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { Court } from '../../domain/Court';
import { CourtRepository } from '../../domain/CourtRepository';
interface CourtDocument extends Document {
  _id: string;
  name: string;
  schedule: string;
}

export class MongoCourtRepository extends MongoRepository<Court> implements CourtRepository {

  public save(court: Court): Promise<void> {
    return this.persist(court.id.value, court);
  }

  protected collectionName(): string {
    return 'Courts';
  }

  public async searchAll(): Promise<Court[]> {
    const collection = await this.collection();
    const documents = await collection.find<CourtDocument>({}).toArray();
    return documents.map(document =>
      Court.fromPrimitives({ id: document._id, name: document.name, schedule: document.schedule })
    );
  }

  public async matching(criteria: Criteria): Promise<Court[]> {
    const documents = await this.searchByCriteria<CourtDocument>(criteria);
    return documents.map(document =>
      Court.fromPrimitives({ id: document._id, name: document.name, schedule: document.schedule })
    );
  }
}
