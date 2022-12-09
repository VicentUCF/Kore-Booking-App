import { CourtRepository } from '../../domain/CourtRepository';
import { CourtsResponse } from './CourtsResponse';
export class CourtsFinder {
  constructor(private readonly repository: CourtRepository) {}

  async run() {
    const courts = await this.repository.searchAll();
    return new CourtsResponse(courts);
  }
}
