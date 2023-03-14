<script lang="ts">
	import Card from '../atoms/Card.svelte';
	import MatchPlayer from '../molecules/MatchPlayer.svelte';
	import type { User } from '../../services/Users/User';
	import type { Match } from '$lib/services/Matches/Match';
	export let match: Match;

	let players = new Array<User | null>(4).fill(null);

  $: () => {
    match.players.forEach((player, i) => {
      players[i] = player;
    });
  }

</script>

<div class="match-card">
	<Card variant="primary">
		<header>{match.pista}-{match.hora}</header>
		<div class="match">
			{#each players as player, i}
				<MatchPlayer {player} />
			{/each}
		</div>
	</Card>
</div>

<style>
	.match-card {
		padding: 0.5rem;
		min-width: 20rem;
		text-align: center;
		font-size: 1rem;
	}

	header {
		background-color: #f5f5f5;
		padding: 0.5em;
		border-radius: 0.5rem;
	}

	.match {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		justify-content: space-between;
		gap: 1rem;
	}
</style>
