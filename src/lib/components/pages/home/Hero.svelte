<script>
	import Cta1 from '../../global/Cta1.svelte';
	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';

	onMount(() => {
		const canvas = document.getElementById('canvas3d');
		const app = new Application(canvas);
		app.load('https://prod.spline.design/k3-HL-spedZFbXxB/scene.splinecode');
	});
</script>

<div class="hero">
	<h1>Marguerite</h1>
	<h1>Start Growing Now</h1>

	<Cta1 />

	<canvas id="canvas3d"></canvas>
</div>

<style>
	.hero {
		display: flex;
		align-items: center;
		justify-content: top;
		flex-direction: column;
		position: relative;
		height: 100svh;
	}

	h1:first-child {
		margin-top: 100px;
		font-size: 32px;
		margin-bottom: 10px;
	}

	h1:nth-child(2) {
		font-weight: 600;
		font-size: 70px;
		margin-bottom: 40px;
	}

	canvas {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -99;
	}
</style>
