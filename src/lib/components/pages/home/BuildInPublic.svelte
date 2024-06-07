<script>
	import Cta2 from '../../global/Cta2.svelte';
</script>

<section class="buildinpublic">
	<svg xmlns="http://www.w3.org/2000/svg" width="34" height="28" viewBox="0 0 34 28" fill="none">
		<path
			d="M5.1 11.9485C6.97531 11.9485 8.5 10.4239 8.5 8.54854C8.5 6.67322 6.97531 5.14854 5.1 5.14854C3.22469 5.14854 1.7 6.67322 1.7 8.54854C1.7 10.4239 3.22469 11.9485 5.1 11.9485ZM28.9 11.9485C30.7753 11.9485 32.3 10.4239 32.3 8.54854C32.3 6.67322 30.7753 5.14854 28.9 5.14854C27.0247 5.14854 25.5 6.67322 25.5 8.54854C25.5 10.4239 27.0247 11.9485 28.9 11.9485ZM30.6 13.6485H27.2C26.265 13.6485 25.4203 14.0257 24.8041 14.6367C26.945 15.8107 28.4644 17.9304 28.7938 20.4485H32.3C33.2403 20.4485 34 19.6889 34 18.7485V17.0485C34 15.1732 32.4753 13.6485 30.6 13.6485ZM17 13.6485C20.2884 13.6485 22.95 10.987 22.95 7.69854C22.95 4.4101 20.2884 1.74854 17 1.74854C13.7116 1.74854 11.05 4.4101 11.05 7.69854C11.05 10.987 13.7116 13.6485 17 13.6485ZM21.08 15.3485H20.6391C19.5341 15.8798 18.3069 16.1985 17 16.1985C15.6931 16.1985 14.4713 15.8798 13.3609 15.3485H12.92C9.54125 15.3485 6.8 18.0898 6.8 21.4685V22.9985C6.8 24.4064 7.94219 25.5485 9.35 25.5485H24.65C26.0578 25.5485 27.2 24.4064 27.2 22.9985V21.4685C27.2 18.0898 24.4587 15.3485 21.08 15.3485ZM9.19594 14.6367C8.57969 14.0257 7.735 13.6485 6.8 13.6485H3.4C1.52469 13.6485 0 15.1732 0 17.0485V18.7485C0 19.6889 0.759687 20.4485 1.7 20.4485H5.20094C5.53563 17.9304 7.055 15.8107 9.19594 14.6367Z"
			fill="#1D1D1F"
		/>
	</svg>
	<h3>Build in public</h3>
	<h2>Discover How Much<br />We've Earned</h2>

	<div class="money">54 034$</div>

	<p>
		<strong>Curious about our success?</strong>
		See how transparent we are with our earnings and learn from our journey. Get a glimpse of how much
		Marguerite has earned through our transparent and public process.
	</p>

	<Cta2 href={'/buildinpublic'} content={'See Our Earnings'} />
</section>

<style>
	.buildinpublic {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	svg {
		margin-bottom: 15px;
	}

	.money {
		text-align: center;
		font-size: 72px;
		font-weight: 700;
		filter: blur(15px);
		margin-bottom: 100px;
	}

	p {
		width: 730px;
		color: #86868b;
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 100px;

		strong {
			color: var(--black);
			font-weight: 600;
		}
	}
</style>
