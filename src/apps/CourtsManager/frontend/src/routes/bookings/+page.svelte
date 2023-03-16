<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/atoms/Button.svelte';
	import type { Booking } from '$lib/services/Bookings/Booking';
	import { onMount } from 'svelte';

	let bookings: Booking[] = [];

	const fetchBookings = async () => {
		const response = await fetch('/api/bookings');
		bookings = await response.json();
	};

	function goToReservar() {
		goto('/bookings/new');
	}

  function parseDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  function parseHour(date: string) {
    return new Date(date).toLocaleTimeString();
  }

	onMount(() => {
		fetchBookings();
	});
</script>

<div>
	<h1>Bookings</h1>

	<Button onClick={goToReservar}>Reservar</Button>

	<div class="bookings">
		{#each bookings as booking}
			<div class="booking">
				<div class="booking__court">
					<span>Court: {booking.court.name}</span>
				</div>

				<div class="booking__user">
					{booking.user.name}
				</div>

				<div class="booking__date">
					<span>Date: {parseDate(booking.date)}</span>
          <span>Hour: {parseHour(booking.date)}</span>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.bookings {
		display: flex;
		flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
	}

	.booking {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem #ccc;
	}

	.booking__court {
		flex: 1;
	}

  .booking__user {
    flex: 1;
  }

	.booking__date {
		flex: 1;
	}
</style>
