<script>
	import Hero from '$lib/components/pages/home/Hero.svelte';
	import Work from '$lib/components/pages/home/Work.svelte';
</script>

<div id="home">
	<Hero />
	<Work />
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
