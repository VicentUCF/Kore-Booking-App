<script lang="ts">
	export let type: 'text' | 'email' | 'password' = 'text';
	export let name: string;
	export let id: string;
	export let label: string;
	export let error: {
		message: string;
	} | null = null;
</script>

{#if error?.message}
	<div class="form__field form__field--error">
		<label class="form__label" for={name}>{label}</label>
		<input class="form__input" {type} {name} {id} />
		<p class="form__error">{error.message}</p>
	</div>
{:else}
	<div class="form__field">
		<label class="form__label" for={name}>{label}</label>
		<input class="form__input" {type} {name} {id} />
	</div>
{/if}

<style lang="scss">
	.form {
		&__error {
			color: tomato;
		}

		&__field {
			display: flex;
			width: 100%;
			flex-direction: column;
			margin-bottom: 1rem;

			&--error {
				border: 1px solid red;
			}
		}

		&__label {
			margin-bottom: 0.5rem;
		}

		&__input {
			padding: 0.5rem;
			border: 1px solid #ccc;
			border-radius: 0.25rem;
		}
	}
</style>
