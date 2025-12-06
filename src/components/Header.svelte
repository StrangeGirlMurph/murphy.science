<script>
	import { page } from '$app/state';
	import Codeberg from './icons/Codeberg.svelte';
	import GitHub from './icons/GitHub.svelte';
	import Menu from './icons/Menu.svelte';
	import MenuOpen from './icons/MenuOpen.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	export const menus = [
		{ name: 'Home', href: '/' },
		{ name: 'About Me', href: '/aboutme' },
		{ name: 'Work', href: '/work' },
		{ name: 'Side Projects', href: '/projects' }
	];

	let menuOpen = false;
</script>

<header class="w-full mb-4">
	<nav class="flex flex-col md:flex-row justify-between gap-4" aria-label="Primary">
		<div class="flex justify-between">
			<div class="flex items-center gap-3 group min-w-fit">
				<a
					href="https://ko-fi.com/murph"
					class="group-hover:animate-spin-slow"
					aria-label="Support me on Ko-fi"
				>
					<picture>
						<source srcset="/profile-50.avif" type="image/avif" />
						<source srcset="/profile-50.webp" type="image/webp" />
						<img
							src="/profile-50.png"
							alt="My avatar - A digital illustration of a cute character floating peacefully with their eyes closed against a dark background. The character has short white hair with a small flower clip, and wears a blue cape over a beige tunic. They are surrounded by golden sparkles and two translucent, glowing blue manta rays."
							class="h-10 w-10 rounded-full shadow-lg"
							width="40"
							height="40"
							loading="eager"
						/>
					</picture>
				</a>
				<a href="/" class="text-2xl font-bold"> Murphy </a>
			</div>
			<div class="md:hidden flex items-center">
				<button
					aria-controls="primary-navigation"
					aria-expanded={menuOpen}
					aria-label="Toggle navigation"
					on:click={() => {
						menuOpen = !menuOpen;
					}}
				>
					{#if menuOpen}
						<MenuOpen className="h-7 w-7" />
					{:else}
						<Menu className="h-7 w-7" />
					{/if}
				</button>
			</div>
		</div>
		<ul
			id="primary-navigation"
			class="md:flex flex-wrap items-center gap-4 justify-center border-t-[1px] pt-4 md:border-t-0 md:pt-0 {!menuOpen
				? 'hidden'
				: 'flex'}"
		>
			{#each menus as menu}
				<li>
					<a
						href={menu.href}
						class="text-lg hover:underline text-center"
						class:text-green={menu.href === page.route.id}
						aria-current={menu.href === page.route.id ? 'page' : 'false'}
						on:click={() => {
							menuOpen = false;
						}}
					>
						{menu.name}
					</a>
				</li>
			{/each}
			<li class="flex items-center gap-4">
				<a
					href="https://github.com/StrangeGirlMurph"
					class="inline-block"
					target="_blank"
					aria-label="My GitHub account"
					on:click={() => {
						menuOpen = false;
					}}
				>
					<GitHub className="h-7 w-7" />
				</a>

				<a
					href="https://codeberg.org/StrangeGirlMurph"
					class="inline-block"
					target="_blank"
					aria-label="My Codeberg account"
					on:click={() => {
						menuOpen = false;
					}}
				>
					<Codeberg className="h-7 w-7" />
				</a>
				<ThemeToggle />
			</li>
		</ul>
	</nav>
</header>
