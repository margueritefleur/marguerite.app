<script>
	import Cta2 from '../../global/Cta2.svelte';
</script>

<section class="guarantee">
	<h3>Our guarantee</h3>
	<h2>Love It or Pay Nothing</h2>

	<div class="description">
		<div class="left">
			<p>You pay when the website is done.</p>
		</div>

		<div class="right">
			<p>
				<strong>
					We're confident in our ability to deliver outstanding web design, development, SEO, and
					branding services.
				</strong>
				That's why we offer a unique guarantee: you only pay when the website is complete, and if you're
				not completely satisfied, you don't pay. Your success and satisfaction are our top priorities.
			</p>

			<Cta2 href={'/buildinpublic'} content={'Learn more about our Process'} />
		</div>
	</div>
</section>

<style>
	h2 {
		margin-bottom: 100px;
	}

	.description {
		display: flex;
		justify-content: space-between;
		width: 980px;
		margin: auto;
	}

	.left,
	.right {
		width: 50%;
	}

	.left {
		font-size: 30px;
		font-weight: 700;

		p {
			width: 230px;
		}
	}

	.right {
		p {
			font-weight: 600;
			font-size: 20px;
			color: #86868b;
			margin-bottom: 120px;
			strong {
				color: var(--black);
			}
		}
	}
</style>
