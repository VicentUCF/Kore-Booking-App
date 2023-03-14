import type { Booking } from './Booking';
import { BaseProvider } from '../base.provider';
import type { Match } from '../Matches/Match';

export class BookingProvider extends BaseProvider {
	static url = `${this.baseUrl}/bookings/`;

	static async getBookings({
		date,
		courtId
	}: {
		date?: Date;
		courtId?: string;
	}): Promise<Booking[]> {
		let fetchUrl = this.url;
		date ? (fetchUrl += `?date=${date}`) : null;
		courtId ? (fetchUrl += `?courtId=${courtId}`) : null;
		console.log(fetchUrl);
		const response = await fetch(fetchUrl);
		const bookings = await response.json();
		return bookings;
	}

	static async getBookingsByDate(date: string): Promise<Match[]> {
		const horarioPartidas: Match[] = [
			...new Array(15).fill(null).map((_, i) => {
				const hour = `0${8 + i}`.slice(-2);
				const minutes = i % 2 === 0 ? '00' : '30';
				return {
					pista: 'infilev',
					hora: `${hour}:${minutes}`,
					players: new Array(4).fill(null)
				};
			})
		];

		const response = await fetch(`${this.baseUrl}/${date}`);
		const bookings = await response.json();
		console.log(Object.entries(bookings));
		if (Object.entries(bookings).length <= 0) return horarioPartidas;
		return horarioPartidas.map((horario) => {
			const hora = horario.hora;
			if (!bookings) return horario;
			console.log(hora);
			const partida = bookings?.find((partida) => partida.hora === hora);
			console.log(partida);
			if (!partida) return horario;
			return {
				...horario,
				players: partida.jugadores
			};
		});
	}

	static async getBooking(id: string): Promise<Booking> {
		const response = await fetch(`${this.url}/${id}`);
		const booking = await response.json();
		return booking;
	}

	static async createBooking(booking: Booking): Promise<Booking> {
		const response = await fetch(this.url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(booking)
		});
		const newBooking = await response.json();
		return newBooking;
	}

	static async updateBooking(booking: Booking): Promise<Booking> {
		const response = await fetch(`${this.url}/${booking.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(booking)
		});
		const updatedBooking = await response.json();
		return updatedBooking;
	}

	static async deleteBooking(id: string): Promise<void> {
		await fetch(`${this.url}/${id}`, {
			method: 'DELETE'
		});
	}
}
