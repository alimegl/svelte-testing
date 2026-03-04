<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Animation for page transitions, inspired by Svelte-playground*/ -->

<div class="page-wrapper">
{#key page.url.pathname}
	<div class="page" transition:fade={{ duration: 200 }}>
		{@render children()}
	</div>
{/key}
</div>

<style>
	:global(body) {
		font-family: "Sans-Serif", Arial, Helvetica, sans-serif;
	}

	:global(button) {
		font-family: inherit;
	}

	.page-wrapper {
		position: relative;
	}

	.page {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
	}
</style>