<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let ctx, services;

	let gap = 20;
	let carousel;
	let padding;

	const updateDimensions = () => {
		padding = (window.innerWidth - 980) / 2;

		ctx.add(() => {
			gsap.set('.invisible-card', { width: `${padding - gap}px` });
		});
	};

	onMount(() => {
		ctx = gsap.context(() => {}, services);
		updateDimensions();

		carousel = document.querySelector('.services .carousel');

		return () => ctx.revert();
	});

	const click = (direction) => {
		ctx.add(() => {
			if (direction === 'right') {
				gsap.to(carousel, {
					scrollLeft: carousel.scrollWidth - window.innerWidth,
					duration: 1,
					ease: 'power2.inOut'
				});
			} else if (direction === 'left') {
				gsap.to(carousel, {
					scrollLeft: 0,
					duration: 1,
					ease: 'power2.inOut'
				});
			}
		});
	};
</script>

<svelte:window onresize={updateDimensions} />

<section class="services" bind:this={services}>
	<h3>What we do.</h3>
	<h2>Services</h2>

	<div class="carousel">
		<div class="moving">
			<div class="invisible-card"></div>
			{#each Array(5) as _, i}
				<div class="card">
					<div class="svg"></div>
					<div class="title">Lorem, ipsum dolor.</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ut adipisci corrupti
						corporis mollitia magnam repellat dolorem tempore sed et, eum voluptatem non tempora
						sequi aspernatur inventore saepe autem esse.
					</div>
				</div>
			{/each}
			<div class="invisible-card"></div>
		</div>
	</div>

	<div class="arrows">
		<button class="left" onclick={() => click('left')}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="36"
				height="36"
				viewBox="0 0 36 36"
				fill="none"
			>
				<path
					d="M21.559 12.062L15.618 17.984L21.5221 23.944C22.105 24.533 22.1021 25.482 21.5131 26.065C21.2211 26.355 20.8391 26.5 20.4571 26.5C20.0711 26.5 19.6851 26.352 19.3921 26.056L12.4351 19.034C11.8531 18.446 11.8551 17.5 12.4411 16.916L19.4411 9.938C20.0261 9.353 20.9781 9.354 21.5621 9.941C22.1471 10.528 22.145 11.478 21.559 12.062Z"
					fill="black"
					fill-opacity="0.56"
				/>
			</svg>
		</button>

		<button class="right" onclick={() => click('right')}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="36"
				height="36"
				viewBox="0 0 36 36"
				fill="none"
			>
				<path
					d="M23.5587 16.916C24.1447 17.5 24.1467 18.446 23.5647 19.034L16.6077 26.056C16.3147 26.352 15.9287 26.5 15.5427 26.5C15.1607 26.5 14.7787 26.355 14.4867 26.065C13.8977 25.482 13.8947 24.533 14.4777 23.944L20.3818 17.984L14.4408 12.062C13.8548 11.478 13.8528 10.5279 14.4378 9.941C15.0218 9.354 15.9738 9.353 16.5588 9.938L23.5587 16.916Z"
					fill="black"
					fill-opacity="0.56"
				/>
			</svg>
		</button>
	</div>
</section>

<style>
	.services {
		background-color: #f5f5f7;
	}

	.carousel:-webkit-scrollbar {
		display: none;
	}

	.carousel {
		width: 100%;
		margin: 0 auto;
		margin-bottom: 30px;
		-ms-overflow-style: none;
		scrollbar-width: none;
		overflow-x: auto;
	}

	.moving {
		display: flex;
		gap: 20px;
	}

	.invisible-card {
		flex-shrink: 0;
	}

	.card {
		height: 350px;
		width: 380px;
		background-color: white;
		border-radius: 28px;
		flex-shrink: 0;
		padding: 30px;
		display: flex;
		flex-direction: column;
		gap: 15px;

		.svg {
			width: 42px;
			height: 42px;
			background-color: red;
		}

		.title {
			font-size: 25px;
			font-weight: 600;
		}

		.description {
			font-size: 16px;
		}
	}

	.arrows {
		width: 980px;
		display: flex;
		justify-content: flex-end;
		margin: auto;
		gap: 10px;

		.left,
		.right {
			border-radius: 36px;
			width: 36px;
			height: 36px;
			background: var(--grey2, rgba(210, 210, 215, 0.64));
		}
	}
</style>
