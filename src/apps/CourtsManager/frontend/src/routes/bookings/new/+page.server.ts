import type { Court } from '$lib/services/Courts/Court';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { Uuid } from '$lib/services/uuid/uuid.service';
import { zfd } from 'zod-form-data';

export const load = (async ({ fetch }) => {
	return {
		courts: new Promise<Court[]>((resolve, reject) => {
			const courts = fetch('/api/courts', {
				method: 'GET'
			});
			setTimeout(() => {
				courts.then((response) => {
					if (response.ok) {
						resolve(response.json());
					} else {
						reject(response);
					}
				});
			});
		})
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	createBooking: async ({ request }) => {
		const formData = await request.formData();
		const bookingSchema = zfd.formData({
			court: zfd.text(),
			user: zfd.text(),
			date: zfd.text(),
			time: zfd.text(),
			email: zfd.text(),
			level: zfd.text()
		});

		console.log(formData);

		const result = bookingSchema.safeParse(formData);

		console.log(result);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData.entries()),
				errors: result.error.flatten().fieldErrors
			};
			console.error(data.errors);
			return fail(400, data);
		}

		throw redirect(303, '/bookings');
	},
	createUser: async ({ request }) => {
		const formData = await request.formData();
		const userSchema = zfd.formData({
			name: zfd.text(),
			email: zfd.text(),
			level: zfd.numeric(z.number().min(1).max(7))
		});

		const result = userSchema.safeParse(formData);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};
			return fail(400, data);
		}

		return {
			status: 201,
			body: {
				...result.data,
				id: Uuid.generate()
			}
		};
	}
} satisfies Actions;
