import type { Court } from '../Courts/Court';
import type { User } from '../Users/User';

export interface Booking {
	id: string;
	court: Court;
	user: User;
	date: string;
}
