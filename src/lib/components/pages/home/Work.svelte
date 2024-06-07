<script>
	import { onMount } from 'svelte';
	import Cta2 from '../../global/Cta2.svelte';
	import gsap from 'gsap';

	let ctx, carousel;
	let translateNumber;
	let gap = 20;
	let index = 0;
	let totalElement = 3;
	let itemWidth;

	const updateDimensions = () => {
		itemWidth = carousel.children[0].offsetWidth;
		translateNumber = itemWidth + gap;
		gsap.set('.moving', { x: -(translateNumber * index) });
	};

	onMount(() => {
		updateDimensions();
		return () => ctx && ctx.revert();
	});

	const click = (e) => {
		ctx = gsap.context(() => {
			let targetIndex = parseInt(e.target.dataset.index);

			if (!isNaN(targetIndex) && targetIndex >= 0 && targetIndex < totalElement) {
				index = targetIndex;
				gsap.to('.moving', { x: -(translateNumber * index) });
			} else if (e.target.dataset.plus !== undefined && index < totalElement - 1) {
				index++;
				gsap.to('.moving', { x: -(translateNumber * index) });
			} else if (e.target.dataset.minus !== undefined && index > 0) {
				index--;
				gsap.to('.moving', { x: -(translateNumber * index) });
			}
		}, carousel);
	};

	const resize = () => {
		updateDimensions();
	};
</script>

<svelte:window onresize={resize} />

<section class="work">
	<h3>What we’ve done.</h3>
	<h2>Some Work</h2>

	<div class="carousel" bind:this={carousel}>
		<div class="moving">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<img src="/tempimage.jpeg" alt="tmp img" data-index="0" onclick={click} />
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<img src="/tempimage.jpeg" alt="tmp img" data-index="1" onclick={click} />
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<img src="/tempimage.jpeg" alt="tmp img" data-index="2" onclick={click} />
		</div>

		<div class="arrows">
			<button class="left {index === 0 ? 'hide' : ''}" data-minus onclick={click}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="34"
					height="62"
					viewBox="0 0 34 62"
					fill="none"
				>
					<path
						d="M31.0625 2.875L2.9375 31L31.0625 59.125"
						stroke="white"
						stroke-opacity="0.8"
						stroke-width="4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>

			<button class="right {index === totalElement - 1 ? 'hide' : ''}" data-plus onclick={click}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="34"
					height="62"
					viewBox="0 0 34 62"
					fill="none"
				>
					<path
						d="M31.0625 2.875L2.9375 31L31.0625 59.125"
						stroke="white"
						stroke-width="4"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
	</div>

	<div class="pagination">
		{#each Array(totalElement) as _, i}
			<button class="point {i === index ? 'current' : ''}" data-index={i} onclick={click}></button>
		{/each}
	</div>

	<Cta2 content={'See All Work'} href={'/work'} />
</section>

<style>
	.work {
		background-color: var(--grey);
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.carousel {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 30px;
		position: relative;
	}

	.moving {
		width: 90%;
		display: flex;
		gap: 20px;
	}

	img {
		width: 100%;
		cursor: pointer;
	}

	.arrows {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 80%;
		display: flex;
		justify-content: space-between;
		pointer-events: none;

		.right {
			transform: rotate(180deg);
		}

		button {
			padding: 20px;
			transition: visibility 0.2s;

			svg {
				opacity: 0.8;
				pointer-events: none;
			}

			&:hover {
				svg {
					opacity: 1;
				}
			}

			&.hide {
				visibility: hidden;
			}
		}

		.left,
		.right {
			pointer-events: all;
		}
	}

	.pagination {
		display: flex;
		gap: 10px;
		margin-bottom: 100px;

		.point {
			width: 8px;
			height: 8px;
			background-color: rgba(0, 0, 0, 0.42);
			border-radius: 999px;
		}

		.current {
			background-color: var(--black);
		}
	}
</style>
