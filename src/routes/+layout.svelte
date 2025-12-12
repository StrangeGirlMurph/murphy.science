<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { onMount } from 'svelte';

	onMount(() => {
		inject({ mode: dev ? 'development' : 'production' });
		injectSpeedInsights();

		console.log('Hello World!');
		console.log('Have fun taking a look behind the scenes :)');
	});
</script>

<svelte:head>
	<link rel="preload" as="image" href="/profile-25-40.avif" type="image/avif" />
	<link rel="preload" as="image" href="/profile-25-40.webp" type="image/webp" />
</svelte:head>

<div class="flex flex-col items-center" style="min-height: 100vh; min-height: 100dvh;">
	<a class="skip-link" href="#main">Skip to content</a>
	<div class="h-[5px] rainbow-bg w-full"></div>
	<div class="p-4 flex flex-col flex-grow justify-between items-center w-full max-w-screen-2xl">
		<Header />
		<main id="main" class="grow max-w-screen-xl flex flex-col justify-start" tabindex="-1">
			<slot />
		</main>
		<Footer />
	</div>
</div>
