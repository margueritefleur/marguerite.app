<script>
	import Footer from '../../lib/components/global/Footer.svelte';
	import TransactionButton from '../../lib/components/pages/buildinpublic/TransactionButton.svelte';

	const { data } = $props();

	console.log(data);
</script>

<div id="buildinpublic">
	<div class="hero">
		<h1 class="money">{data.earned[0].number}</h1>

		<h1>Cash Collected since Jan. 2024</h1>

		<a href="#transactions"
			>View All Transactions <svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="21"
				viewBox="0 0 20 21"
				fill="none"
			>
				<path
					d="M15.625 7.6875L10 13.3125L4.375 7.6875"
					stroke="#FF5A00"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
	</div>

	<div class="transactions" id="transactions">
		{#each data.transactions as records}
			<TransactionButton {records} />
			<TransactionButton {records} />
			<TransactionButton {records} />
		{/each}
	</div>

	<Footer />
</div>

<style>
	.hero {
		padding-top: 180px;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-bottom: 10svh;

		h1 {
			font-size: 24px;
			font-weight: 400;
			margin-bottom: 50px;
		}

		h1.money {
			margin-bottom: 20px;
			font-size: 128px;
			font-weight: 600;
		}

		a {
			padding: 10px;
			display: flex;
			gap: 10px;
			align-items: center;
			color: var(--orange, #ff5a00);
			font-size: 17px;
		}
	}

	.transactions {
		padding-top: 10svh;

		width: var(--base-width);
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-bottom: 180px;
	}
</style>
