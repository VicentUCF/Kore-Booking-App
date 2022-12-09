import { CourtRepositoryMock } from '../../__mocks__/CourtRepositoryMock';
import { CourtMother } from '../../domain/CourtMother';
import { SearchCourtsByCriteriaResponseMother } from '../../domain/SearchCourtsByCriteriaResponseMother';
import { CourtsByCriteriaSearcher } from '../../../../../../src/Contexts/CourtsManager/Courts/application/SearchByCriteria/CourtsByCriteriaSearcher';
import { SearchCourtsByCriteriaQueryHandler } from '../../../../../../src/Contexts/CourtsManager/Courts/application/SearchByCriteria/SearchCourtsByCriteriaQueryHandler';
import { SearchCourtsByCriteriaQuery } from '../../../../../../src/Contexts/CourtsManager/Courts/application/SearchByCriteria/SearchCourtsByCriteriaQuery';
import { Operator } from '../../../../../../src/Contexts/Shared/domain/criteria/FilterOperator';


describe('Search Courts By Criteria Query Handler', () => {

  let repository: CourtRepositoryMock;

  beforeEach(() => {
    repository = new CourtRepositoryMock();
  });

  it('should search all courts', async () => {
    const courts = [CourtMother.random(), CourtMother.random(), CourtMother.random()];
    repository.returnMatching(courts);

    const handler = new SearchCourtsByCriteriaQueryHandler(new CourtsByCriteriaSearcher(repository));
    const query = new SearchCourtsByCriteriaQuery([]);
    const response = await handler.handle(query);

    const expected = SearchCourtsByCriteriaResponseMother.create(courts);
    expect(response).toEqual(expected);

  });

  it('should search courts by criteria', async () => {

    const courts = [CourtMother.random(), CourtMother.random(), CourtMother.random()];
    repository.returnMatching(courts);

    const handler = new SearchCourtsByCriteriaQueryHandler(new CourtsByCriteriaSearcher(repository));

    const filterName: Map<string, string> = new Map([
      ['field', 'name'],
      ['operator', Operator.EQUAL],
      ['value', courts[0].name.value]
    ]);

    const filters: Array<Map<string, string>> = new Array(filterName);
    const query = new SearchCourtsByCriteriaQuery(filters);

    const response = await handler.handle(query);

    const expected = SearchCourtsByCriteriaResponseMother.create(courts);
    expect(response).toEqual(expected);

  });

});
