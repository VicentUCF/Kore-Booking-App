<script lang="ts">
	import { onMount } from 'svelte';

	let bookings: any = [];

	const fetchBookings = async () => {
		const response = await fetch('/api/bookings');
		bookings = await response.json();
		console.log(bookings);
	};

	onMount(() => {
		fetchBookings();
	});
</script>

<div>
	<h1>Bookings</h1>
	<div class="bookings">
		{#each bookings as booking}
			<div class="booking">
				<div class="booking__court">
					<span>Court: {booking.courtId}</span>
				</div>
				<div class="booking__date">
					<span>Date: {booking.date}</span>
				</div>
			</div>
		{/each}
	</div>
</div>
