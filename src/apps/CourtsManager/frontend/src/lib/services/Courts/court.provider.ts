import type { Court } from './Court';
import { BaseProvider } from '../base.provider';

export class CourtProvider extends BaseProvider {
	static url = `${this.baseUrl}/courts`;

	static async getCourts(): Promise<Court[]> {
		const response = await fetch(this.url);
		const courts = await response.json();
		return courts;
	}

	static async getCourt(id: string): Promise<Court> {
		const response = await fetch(`${this.url}/${id}`);
		const court = await response.json();
		return court;
	}

	static async createCourt(court: Court): Promise<Court> {
		const response = await fetch(this.url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(court)
		});
		const newCourt = await response.json();
		return newCourt;
	}

	static async updateCourt(court: Court): Promise<Court> {
		const response = await fetch(`${this.url}/${court.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(court)
		});

		const updatedCourt = await response.json();
		return updatedCourt;
	}

  static async deleteCourt(id: string): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
  }
}
