import { CourtsResponse } from '../../../../../src/Contexts/CourtsManager/Courts/application/SearchByCriteria/CourtsResponse';
import { Court } from '../../../../../src/Contexts/CourtsManager/Courts/domain/Court';

export class SearchCourtsByCriteriaResponseMother{
  static create(court: Array<Court>) {
    return new CourtsResponse(court);
  }
}
