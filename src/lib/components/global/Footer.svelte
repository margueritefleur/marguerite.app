<script>
	import Cta1 from './Cta1.svelte';
</script>

<div class="footer">
	<div class="divider"></div>

	<p>Unlock your potential</p>

	<div class="ctas">
		<Cta1 />
		<a href="/contact">Contact</a>
	</div>

	<div class="marguerite">Marguerite</div>

	{#each Array(3) as _, i}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="53"
			height="53"
			viewBox="0 0 53 53"
			fill="none"
			class="svg-{i}"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.95948 26.5C-9.79011 46.5436 6.45651 62.7902 26.5001 46.0406C46.5396 62.7902 62.7902 46.5282 46.0406 26.5C62.7902 6.45651 46.5396 -9.79011 26.5001 6.95948C6.45651 -9.79011 -9.79011 6.45651 6.95948 26.5ZM26.5001 36.305C31.9153 36.305 36.3051 31.9153 36.3051 26.5C36.3051 21.085 31.9153 16.695 26.5001 16.695C21.085 16.695 16.6951 21.085 16.6951 26.5C16.6951 31.9153 21.085 36.305 26.5001 36.305Z"
				fill="url(#paint0_linear_56_185)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_56_185"
					x1="3.71005"
					y1="6.89005"
					x2="47.435"
					y2="47.567"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#2997FF" />
					<stop offset="1" stop-color="#0071E3" />
				</linearGradient>
			</defs>
		</svg>
	{/each}
</div>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
		position: relative;
	}

	.divider {
		margin: auto;
		margin-bottom: 180px;
		height: 1px;
		width: 980px;
		background-color: #c9c9c9;
	}

	p {
		font-weight: 700;
		font-size: 72px;
		margin-bottom: 100px;
	}

	.ctas {
		display: flex;
		gap: 10px;
		margin-bottom: 80px;
	}

	a {
		display: flex;
		padding: 12px 22px;
		align-items: center;
		background-color: var(--blue);
		color: white;
		border-radius: 99px;

		font-size: 17px;
		font-weight: 600;

		transition: background-color 0.2s;

		&:hover {
			background-color: var(--blue2);
		}
	}

	svg {
		position: absolute;

		&.svg-0 {
			left: 9%;
			top: 22%;
			width: 52.999px;
		}

		&.svg-1 {
			left: 16%;
			top: 40%;
			transform: rotate(23.379deg);
			width: 80.597px;
			height: 80.598px;
		}

		&.svg-2 {
			left: 27%;
			top: 60%;
			transform: rotate(23.379deg);
			width: 17.657px;
			height: 17.657px;
		}
	}

	.marguerite {
		font-size: 17vw;
		font-weight: 700;
		position: relative;
		top: 90px;
	}
</style>
