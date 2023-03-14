<script lang="ts">
	export let type: 'button' | 'submit' = 'button';
	export let disabled: boolean = false;
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let variant: 'primary' | 'secondary' = 'primary';
	export let onClick: () => void;

	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};
</script>

<button class="button button--{variant} button--{size}" {type} on:click={handleClick} {disabled}>
	<slot />
</button>

<style lang="scss">
	.button {
		display: inline-block;
		padding: 0.5rem 1rem;
		border: 1px solid #000;
		border-radius: 0.25rem;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		text-align: center;
		text-decoration: none;
		vertical-align: middle;
		cursor: pointer;
		user-select: none;
		transition: all 0.2s ease-in-out;

		&:hover {
			background-color: #000;
			color: #fff;
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}

		&--primary {
			background-color: #000;
			color: #fff;

			&:hover {
				background-color: #fff;
				color: #000;
			}
		}

		&--secondary {
			background-color: #fff;
			color: #000;

			&:hover {
				background-color: #000;
				color: #fff;
			}
		}

		&--small {
			padding: 0.25rem 0.5rem;
			font-size: 0.75rem;
		}

		&--large {
			padding: 0.75rem 1.5rem;
			font-size: 1.25rem;
		}

		&--block {
			display: block;
			width: 100%;
		}
	}
</style>
