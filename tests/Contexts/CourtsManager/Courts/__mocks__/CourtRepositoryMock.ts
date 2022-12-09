import { CourtRepository } from '../../../../../src/Contexts/CourtsManager/Courts/domain/CourtRepository';
import { Court } from '../../../../../src/Contexts/CourtsManager/Courts/domain/Court';
import { Criteria } from '../../../../../src/Contexts/Shared/domain/criteria/Criteria';

export class CourtRepositoryMock implements CourtRepository {
  private mockSearchAll = jest.fn();
  private mockSave = jest.fn();
  private mockMatching = jest.fn();
  private courts: Array<Court> = [];

  returnOnSearchAll(courts: Array<Court>) {
    this.courts = courts;
  }

  returnMatching(courts: Array<Court>) {
    this.courts = courts;
  }

  async searchAll(): Promise<Court[]> {
    this.mockSearchAll();
    return this.courts;
  }

  assertSearchAll() {
    expect(this.mockSearchAll).toHaveBeenCalled();
  }

  async save(court: Court): Promise<void> {
    this.mockSave(court);
  }

  assertSaveHasBeenCalledWith(court: Court) {
    expect(this.mockSave).toHaveBeenCalledWith(court);
  }

  async matching(criteria: Criteria): Promise<Court[]> {
    this.mockMatching(criteria);
    return this.courts;
  }

  assertMatchingHasBeenCalledWith() {
    expect(this.mockMatching).toHaveBeenCalled();
  }
}
