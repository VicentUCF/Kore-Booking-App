<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let date: Date;
	const dispatch = createEventDispatcher();

	function changeDay(event: Event) {
		console.log((event.target as HTMLInputElement).value);
		date = new Date((event.target as HTMLInputElement).value);
		dispatch('dateChanged', date);
	}

	function nextDay() {
		date.setDate(date.getDate() + 1);
		dispatch('dateChanged', date);
	}

	function previousDay() {
		date.setDate(date.getDate() - 1);
		dispatch('dateChanged', date);
	}

	// format date to 2023-03-15
	let dateFormated = date.toISOString().split('T')[0];
	$: dateFormated = date.toISOString().split('T')[0];
</script>

<div class="date-picker">
	<button class="arrow arrow-left" on:click={previousDay} type="button" title="Previous day">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15 18L9 12L15 6"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
	<input type="date" name="date" on:input={changeDay} id="date" value={dateFormated} />
	<button class="arrow arrow-right" on:click={nextDay} type="button" title="Next day">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9 18L15 12L9 6"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</div>

<style>

  .date-picker {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

	input[type='date'] {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 4px, 4px, 0, 0;
    height: 3rem;
		box-sizing: border-box;
	}

	.arrow {
		background-color: #8373e9;
    height: 3rem;
		border: none;
		cursor: pointer;
		border-radius: 4px, 4px, 0, 0;
		padding: 1rem;
		display: flex;
		align-items: center;
	}
</style>
