<script>
	import Header from '$lib/components/objects/Header.svelte';
	let title = 'Courts Manager';
	let routes = [
		{
			name: 'Bookings',
			path: '/bookings'
		},
		{
			name: 'Courts',
			path: '/courts'
		}
	];
</script>

<Header {title} {routes} />

<main class="container">
	<slot />
</main>

<style lang="scss">
	.container {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
