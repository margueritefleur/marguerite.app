<script>
	import Hero from '$lib/components/pages/home/Hero.svelte';
	import Work from '$lib/components/pages/home/Work.svelte';
	import BuildInPublic from '../lib/components/pages/home/BuildInPublic.svelte';
	import Guarantee from '../lib/components/pages/home/Guarantee.svelte';
	import Services from '../lib/components/pages/home/Services.svelte';
</script>

<div id="home">
	<Hero />
	<Work />
	<Guarantee />
	<Services />
	<BuildInPublic />
</div>

<style>
	:global(#home section) {
		padding: 180px 0;
	}

	:global(#home section h3) {
		font-weight: 700;
		text-align: center;
		font-size: 22px;
		margin-bottom: 15px;
	}

	:global(#home section h2) {
		font-weight: 700;
		text-align: center;
		font-size: 72px;
		margin-bottom: 100px;
	}
</style>
