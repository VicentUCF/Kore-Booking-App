<script lang="ts">
	import type { User } from '$lib/services/Users/User';
	export let player: User | null = null;

	import UserIcon from '$lib/components/atoms/UserIcon.svelte';
	import addLogo from '$lib/assets/add.svg';

  console.log(player);

</script>

{#if player !== null}
	<div class="player">
		<UserIcon userIcon={player.avatar} userIconAlt={player.name} size="large" />
		<div class="player__data">
			<p>{player.name}[{player.level}]</p>
		</div>
	</div>
{:else}
	<div class="player">
		<button class="player__add" on:click={() => console.log('reservar')}>
			<UserIcon userIcon={addLogo} size="large" />
		</button>
	</div>
{/if}

<style lang="scss">
	.player {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100px;

		&__data {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
      font-size: 1rem;
		}

		&__add {
			background-color: transparent;
			border: 0;
			cursor: pointer;
		}
	}
</style>
