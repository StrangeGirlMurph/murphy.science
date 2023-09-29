<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	console.log('Hello World!');
	console.log('Have fun taking a look behind the scenes :)');

	/* import { onNavigate } from '$app/navigation';
	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	}); */
</script>

<div class="flex flex-col items-center" style="min-height:100vh; min-height: 100svh;">
	<div class="h-[5px] rainbow-bg w-full" />
	<div
		class="p-4 sm:p-6 flex flex-col flex-grow justify-between items-center w-full max-w-screen-2xl"
	>
		<Header />
		<main class="grow max-w-screen-xl flex flex-col justify-center">
			<slot />
		</main>
		<Footer />
	</div>
</div>
