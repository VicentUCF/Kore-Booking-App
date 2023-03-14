<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Card from '$lib/components/atoms/Card.svelte';
	import UserIcon from '$lib/components/atoms/UserIcon.svelte';
	import MatchPlayer from '$lib/components/molecules/MatchPlayer.svelte';
	import MatchCard from '$lib/components/objects/MatchCard.svelte';
	import Matches from '$lib/components/organisms/Matches.svelte';
	import type { User } from '$lib/services/Users/User';

	const player1: User = {
		name: 'Paco',
		level: 1,
		avatar: 'https://picsum.photos/200/300',
		email: 'a',
		id: 'a'
	};
</script>

<div class="container">
	<header>
		<h1>Welcome to CourtsManager</h1>
	</header>

	<body>
		<Matches />
	</body>
</div>

<style lang="scss">
	:root {
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
		font-family: 'Roboto', sans-serif;
	}
	.container {
		padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
	}
</style>
