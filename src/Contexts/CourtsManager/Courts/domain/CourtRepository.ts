import { Court } from './Court';
import { Criteria } from '../../../Shared/domain/criteria/Criteria';
export interface CourtRepository {
  save(court: Court): Promise<void>;
  searchAll(): Promise<Array<Court>>;
  matching(criteria: Criteria): Promise<Array<Court>>;
}
