<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	const { records } = $props();

	console.log(records);

	let ctx, button;

	onMount(() => {
		ctx = gsap.context(() => {}, button);

		return () => ctx.revert();
	});

	const mouseEnter = () => {
		ctx.add(() => {
			gsap.to('span', { scale: 1.06, duration: 0.2, ease: 'back.out(1.7)' });
			gsap.to('span svg g', { opacity: 1, duration: 0.2 });
		}, button);
	};

	const mouseLeave = () => {
		ctx.add(() => {
			gsap.to('span', { scale: 1, duration: 0.2 });
			gsap.to('span svg g', { opacity: 0.8, duration: 0.2 });
		}, button);
	};
</script>

<button bind:this={button} onmouseenter={mouseEnter} onmouseleave={mouseLeave}>
	<img
		src={`http://127.0.0.1:8090/api/files/${records.collectionName}/${records.id}/${records.picture}`}
		alt=""
	/>
	{records.content}
	<span
		><svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
			<g opacity="0.8">
				<path
					d="M25.5048 17.0898H19.6048V11.1898C19.6048 10.2898 18.9048 9.58984 18.0048 9.58984C17.1048 9.58984 16.5048 10.2898 16.5048 11.0898V16.9898H10.6048C9.70482 16.9898 9.00482 17.6898 9.00482 18.5898C9.00482 19.4898 9.70482 20.0898 10.5048 20.0898H16.4048V25.9898C16.4048 26.8898 17.1048 27.4898 17.9048 27.4898C18.8048 27.4898 19.4048 26.7898 19.4048 25.9898V20.0898H25.3048C26.2048 20.0898 26.8048 19.3898 26.8048 18.5898C27.0048 17.7898 26.3048 17.0898 25.5048 17.0898Z"
					fill="white"
				/>
			</g>
		</svg></span
	></button
>

<style>
	button {
		border-radius: 32px;
		background: rgba(232, 232, 237, 0.8);
		backdrop-filter: blur(10px);

		display: inline-flex;
		padding: 12px 22px;
		align-items: center;
		gap: 16px;
		border-radius: 999px;
		font-weight: 600;
		font-size: 17px;
		width: 100%;
		justify-content: space-between;
	}

	img {
		width: 36px;
		height: 36px;
		border-radius: 999px;
	}

	span {
		width: 36px;
		height: 36px;
		background-color: var(--blue);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 999px;
	}
</style>
