import { Court } from '../../domain/Court';

interface CourtResponse {
  id: string;
  name: string;
  schedule: string;
}

export class CourtsResponse {
  public readonly courts: Array<CourtResponse>;

  constructor(courts: Array<Court>) {
    this.courts = courts.map(court => court.toPrimitives());
  }
}
