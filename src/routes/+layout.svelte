<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div class="flex justify-center">
	<div
		class="p-4 sm:p-6 flex flex-col justify-between items-center w-full min-h-screen max-w-screen-2xl "
	>
		<Header />
		<main class="grow max-w-screen-xl">
			<slot />
		</main>
		<Footer />
	</div>
</div>
