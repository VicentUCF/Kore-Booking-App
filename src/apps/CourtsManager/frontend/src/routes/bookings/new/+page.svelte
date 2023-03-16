<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	import Button from '$lib/components/atoms/Button.svelte';
	import Input from '$lib/components/atoms/Input.svelte';
	import type { User } from '$lib/services/Users/User';

	import type { ActionData, PageData } from './$types';
	export let data: PageData;
	export let form: ActionData;

	let users: User[] = [];
	let newUser = {
		visible: false,
		props: {
			name: 'Vicent',
			email: '',
			level: 1
		}
	};

	const buttonsHandle = {
		goBack: () => {
			goto('/bookings');
		},
		openUserForm: () => {
			newUser = {
				...newUser,
				visible: !newUser.visible
			};
		}
	};
</script>

<div class="header__buttons">
	<Button onClick={buttonsHandle.goBack}>Go Back</Button>
	<Button type="submit" variant="submit">Create</Button>
</div>

<pre>
	{JSON.stringify(form)}
</pre>
<div class="form">
	<form method="POST" action="?/createBooking" use:enhance>
		<div class="form__field">
			<label for="court">Court</label>
			<select name="court" id="court">
				{#if !data.courts.length}
					<option value="1">No courts avaliable</option>
				{:else}
					{#each data.courts as court}
						<option value={court.id}>{court.name}</option>
					{/each}
				{/if}
			</select>
		</div>

		<div class="form__field">
			<label for="date">Date</label>
			<input type="date" name="date" id="date" />
			{#if form?.errors?.date}
				<p class="error">{form.errors.date}</p>
			{/if}
		</div>

		<div class="form__field">
			<label for="time">Time</label>
			<input type="time" name="time" id="time" />
			{#if form?.errors?.time}
				<p class="error">{form.errors.time}</p>
			{/if}
		</div>

		<div class="form__field">
			<label for="user">User</label>
			<div class="input__user">
				<select name="user" id="user">
					{#if !users.length}
						<option value="1">No users avaliable</option>
					{:else}
						{#each users as user}
							<option value={user.id}>{user.name}</option>
						{/each}
					{/if}
				</select>
				{#if newUser.visible || !users.length}
					<Button onClick={buttonsHandle.openUserForm} variant="delete">Cancel</Button>
				{:else}
					<Button onClick={buttonsHandle.openUserForm}>Add User</Button>
				{/if}
			</div>
		</div>

		{#if newUser.visible || !users.length}
			<form class="form--user" method="POST" action="?/createUser">
				<Input type="text" name="name" id="name" label="Name" />

				<Input type="text" name="email" id="email" label="Email" />

				<div class="form__field">
					<label for="level">Level</label>
					<input type="range" min="1" max="7" name="level" id="level" />
				</div>

				<div class="form__submit--user">
					<Button size="full-width" variant="submit">New User</Button>
				</div>
			</form>
		{/if}

		<div class="submit__booking">
			<Button type="submit" variant="submit" size="full-width">Create Booking</Button>
		</div>
	</form>
</div>

<style lang="scss">
	.header__buttons {
		display: flex;
		justify-content: space-between;
	}

	.error {
		color: tomato;
	}

	.submit__booking {
		margin-top: 1rem;
	}

	.form {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
	}

	.form--user {
		background-color: #eee;
		padding: 1rem;
	}

	.form__submit--user {
		width: 100%;
	}

	.input__user {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		select {
			width: 70%;
		}
	}

	.form__field {
		display: flex;
		width: 100%;
		flex-direction: column;
		margin-bottom: 1rem;
	}

	.form__field label {
		margin-bottom: 0.5rem;
	}

	.form__field input,
	.form__field select {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
</style>
