import { CourtRepositoryMock } from '../../__mocks__/CourtRepositoryMock';
import { CourtCreator } from '../../../../../../src/Contexts/CourtsManager/Courts/application/Create/CourtCreator';
import EventBusMock from '../../../Shared/EventBusMock';
import { CreateCourtCommandHandler } from '../../../../../../src/Contexts/CourtsManager/Courts/application/Create/CreateCourtCommandHandler';
import { CreateCourtCommandMother } from './CreateCourtCommandMother';
import { CourtMother } from '../../domain/CourtMother';
import { CourtCreatedDomainEventMother } from '../../domain/CourtCreatedDomainEventMother';
let repository: CourtRepositoryMock;
let creator: CourtCreator;
let eventBus: EventBusMock;
let handler: CreateCourtCommandHandler;

beforeEach(() => {
  repository = new CourtRepositoryMock();
  eventBus = new EventBusMock();
  creator = new CourtCreator(repository, eventBus);
  handler = new CreateCourtCommandHandler(creator);
});

describe('CourtsManagerCourtCreator', () => {
  it('should create a valid Court', async () => {
    const command = CreateCourtCommandMother.random();
    const court = CourtMother.from(command);
    const domainEvent = CourtCreatedDomainEventMother.fromCourt(court);

    await handler.handle(command);

    repository.assertSaveHasBeenCalledWith(court);
    eventBus.assertLastPublishedEventIs(domainEvent);
  });
});

