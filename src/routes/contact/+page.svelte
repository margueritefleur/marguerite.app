<script>
	import { enhance } from '$app/forms';

	let { form } = $props();

	$inspect(form);
</script>

<div id="contact">
	<h1>We’ve been waiting for you</h1>

	<form action="?/contact" method="post" use:enhance>
		<div class="input-container">
			<input type="text" name="name" id="name" placeholder="ENTER YOUR NAME" />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				viewBox="0 0 22 22"
				fill="none"
			>
				<path
					d="M7.5625 7.5625V5.84375C7.5625 5.38791 7.74358 4.95074 8.06591 4.62841C8.38824 4.30608 8.82541 4.125 9.28125 4.125H18.2188C18.6746 4.125 19.1118 4.30608 19.4341 4.62841C19.7564 4.95074 19.9375 5.38791 19.9375 5.84375V16.1562C19.9375 16.6121 19.7564 17.0493 19.4341 17.3716C19.1118 17.6939 18.6746 17.875 18.2188 17.875H9.28125C8.82541 17.875 8.38824 17.6939 8.06591 17.3716C7.74358 17.0493 7.5625 16.6121 7.5625 16.1562V14.4375"
					stroke="#1D1D1F"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M11.6875 14.4375L15.125 11L11.6875 7.5625M2.0625 11H14.4375"
					stroke="#1D1D1F"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<div class="input-container">
			<input type="email" name="email" id="email" placeholder="ENTER YOUR EMAIL" />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				viewBox="0 0 22 22"
				fill="none"
			>
				<path
					d="M7.5625 7.5625V5.84375C7.5625 5.38791 7.74358 4.95074 8.06591 4.62841C8.38824 4.30608 8.82541 4.125 9.28125 4.125H18.2188C18.6746 4.125 19.1118 4.30608 19.4341 4.62841C19.7564 4.95074 19.9375 5.38791 19.9375 5.84375V16.1562C19.9375 16.6121 19.7564 17.0493 19.4341 17.3716C19.1118 17.6939 18.6746 17.875 18.2188 17.875H9.28125C8.82541 17.875 8.38824 17.6939 8.06591 17.3716C7.74358 17.0493 7.5625 16.6121 7.5625 16.1562V14.4375"
					stroke="#1D1D1F"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M11.6875 14.4375L15.125 11L11.6875 7.5625M2.0625 11H14.4375"
					stroke="#1D1D1F"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<div class="input-container">
			<textarea name="description" id="description" placeholder="WRITE US SOMETHING"></textarea>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				viewBox="0 0 22 22"
				fill="none"
			>
				<path
					d="M7.5625 7.5625V5.84375C7.5625 5.38791 7.74358 4.95074 8.06591 4.62841C8.38824 4.30608 8.82541 4.125 9.28125 4.125H18.2188C18.6746 4.125 19.1118 4.30608 19.4341 4.62841C19.7564 4.95074 19.9375 5.38791 19.9375 5.84375V16.1562C19.9375 16.6121 19.7564 17.0493 19.4341 17.3716C19.1118 17.6939 18.6746 17.875 18.2188 17.875H9.28125C8.82541 17.875 8.38824 17.6939 8.06591 17.3716C7.74358 17.0493 7.5625 16.6121 7.5625 16.1562V14.4375"
					stroke="#1D1D1F"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M11.6875 14.4375L15.125 11L11.6875 7.5625M2.0625 11H14.4375"
					stroke="#1D1D1F"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<button type="submit">SUBMIT</button>
	</form>

	<div class="errors">
		{#if form?.errors?.name}
			{form.errors.name.message}
		{/if}
		{#if form?.errors?.email}
			{form.errors.email.message}
		{/if}
		{#if form?.errors?.description}
			{form.errors.description.message}
		{/if}
	</div>

	<div class="succes">
		{#if form?.success}
			<p>The form is has been sent successfully</p>
		{/if}
	</div>
</div>

<style>
	#contact {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	h1 {
		margin-top: 200px;
		margin-bottom: 80px;

		font-size: 24px;
		font-weight: 400;
	}

	form {
		width: 400px;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.input-container {
		position: relative;

		& svg {
			position: absolute;
			right: 15px;
			top: 14px;
			opacity: 0;
		}
	}

	input,
	textarea,
	button {
		width: 100%;
		padding: 16px;

		border-radius: 10px;
		border: 1px solid rgba(210, 210, 210, 0.7);
		outline: none;
		resize: vertical;
		font-family: 'Inter';

		&:focus {
			border: 1px solid var(--blue2);

			& + svg {
				opacity: 1;
			}
		}
	}

	textarea {
		height: 140px;
	}

	button {
		border: 1px solid var(--blue);
		background-color: var(--blue);
		color: white;
		text-align: center;

		transition: background-color 0.2s;

		&:hover {
			background-color: var(--blue2);
		}

		&:focus {
			background-color: var(--blue2);
		}
	}
</style>
