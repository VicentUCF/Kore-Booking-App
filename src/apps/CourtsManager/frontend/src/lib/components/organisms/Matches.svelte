<script lang="ts">
	import DatePicker from '../atoms/DatePicker.svelte';
	import MatchCard from '../objects/MatchCard.svelte';
	import type { Match } from '$lib/services/Matches/Match';
	import { onMount } from 'svelte';
	import { BookingProvider } from '$lib/services/Bookings/booking.provider';

	let date = new Date();
	let matches: Promise<Match[]> = fecthMatches();

	function updateDate(event: CustomEvent<Date>) {
		date = event.detail;
		matches = fecthMatches();
	}

	async function fecthMatches(): Promise<Match[]> {
		const dateRequest = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
		return await BookingProvider.getBookingsByDate(dateRequest);
	}
</script>

<div class="matches">
	<div class="matches__header">
		<DatePicker {date} on:dateChanged={updateDate} />
	</div>

	{date.toLocaleDateString('es-ES')}

	<div class="matches__body">
		<div class="matches__court">
			{#await matches}
				<div>loading...</div>
			{:then matches}
				{#if matches.length === 0}
					<div>No hay partidos</div>
				{/if}
				{#if matches.length > 0}
					{#each matches as match}
						<MatchCard {match} />
					{/each}
				{/if}
			{/await}
		</div>
	</div>
</div>

<style lang="scss">
	.matches {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		&__header {
			display: flex;
			justify-content: center;
			text-align: center;
			align-items: center;
			width: 50%;
			margin: 0 auto;
		}

		&__body {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		&__court {
			display: grid;
			grid-template-columns: repeat(10, 1fr);
			gap: 1rem;
			width: 100%;
		}
	}
</style>
