<script lang="ts">
	export let userIcon: string = 'https://picsum.photos/200/300'
	export let userIconAlt: string = 'User icon';
	export let size: 'small' | 'medium' | 'large' = 'medium';
</script>

<figure class="user-icon">
	<img class="user-icon__image user-icon__image--{size}" src={userIcon} alt={userIconAlt} />
</figure>

<style lang="scss">
	.user-icon {
		&__image {
			display: block;
			width: 100%;
			height: 100%;
      border-radius: 50%;

			&--small {
				width: 2rem;
				height: 2rem;
			}

			&--medium {
				width: 3rem;
				height: 3rem;
			}

			&--large {
				width: 4rem;
				height: 4rem;
			}
		}
	}
</style>
