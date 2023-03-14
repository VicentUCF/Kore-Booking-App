import type { User } from "../Users/User";

export interface Match {
  pista: string;
  hora: string;
  players: User[] ;
}
