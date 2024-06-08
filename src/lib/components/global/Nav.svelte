<script>
	import { page } from '$app/stores';
</script>

<nav>
	<div class="container">
		<div class="left"></div>

		<div class="right">
			<a href="/">Home <span class={$page.url.pathname === '/' ? 'visible' : ''}></span></a>
			<a href="/work">Work <span class={$page.url.pathname === '/work' ? 'visible' : ''}></span></a>
			<a href="/buildinpublic"
				>Build In Public <span class={$page.url.pathname === '/buildinpublic' ? 'visible' : ''}
				></span></a
			>
			<a href="/blog"
				>Blog <span class={$page.url.pathname === '/blog' ? 'visible' : ''}></span>
			</a>
			<button>Free Audit</button>
			<a href="/contact">Contact</a>
		</div>
	</div>
</nav>

<style>
	nav {
		border-bottom: 2px solid #fff;
		background: rgba(245, 245, 247, 0.8);
		backdrop-filter: blur(10px);

		display: flex;
		justify-content: center;
		height: 50px;
		width: 100%;

		font-size: 12px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}

	.container {
		width: var(--base-width);
		height: 100%;
		display: flex;
		justify-content: space-between;
	}

	.left {
	}

	.right {
		display: flex;
		gap: 10px;
		align-items: center;

		& a,
		button {
			transition: all 0.2s;
		}

		& a:hover {
			color: var(--grey3);
		}

		a {
			position: relative;
			padding: 10px;
		}

		span {
			width: 5px;
			height: 5px;
			border-radius: 999px;
			background-color: var(--blue);
			position: absolute;
			left: 50%;
			bottom: 1px;
			transform: translateX(-50%);
			opacity: 0;
			transform: translateY(-2px);
			transition: all 0.3s;

			&.visible {
				opacity: 1;
				transform: translateY(0px) translateX(-50%);
			}
		}

		& a[href='/contact'] {
			background-color: var(--blue);
			padding: 4px 11px;
			color: var(--white);
			border-radius: 999px;

			&:hover {
				background-color: var(--blue2);
			}
		}

		& button {
			border-radius: 999px;
			border: 1px solid var(--black);
			padding: 3px 10px;

			&:hover {
				background-color: white;
				border: 1px solid var(--white);
			}
		}
	}
</style>
