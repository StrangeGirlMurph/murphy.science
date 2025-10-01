<script>
	import { page } from '$app/stores';
	import Codeberg from './icons/Codeberg.svelte';
	import GitHub from './icons/GitHub.svelte';
	import Menu from './icons/Menu.svelte';
	import MenuOpen from './icons/MenuOpen.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	export const menus = [
		{ name: 'Home', href: '/' },
		{ name: 'About Me', href: '/aboutme' },
		{ name: 'Work', href: '/work' },
		{ name: 'Side Projects', href: '/projects' },
		{ name: 'University', href: '/university' }
	];

	let menuOpen = false;
</script>

<header class="w-full mb-4">
	<nav class="flex flex-col md:flex-row justify-between gap-4">
		<div class="flex justify-between">
			<div class="flex items-center gap-3 group min-w-fit">
				<a href="https://ko-fi.com/murph" class="group-hover:animate-spin-slow">
					<img src="/profile-25.png" alt="pfp" class="h-10 w-10 rounded-full shadow-lg" />
				</a>
				<a href="/" class="text-2xl font-bold"> Murphy </a>
			</div>
			<button
				class="md:hidden"
				on:mouseup={() => {
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
		<ul
			class="md:flex flex-wrap items-center gap-4 justify-center border-t-[1px] pt-4 md:border-t-0 md:pt-0 {!menuOpen
				? 'hidden'
				: 'flex'}"
		>
			{#each menus as menu}
				<li>
					<a
						href={menu.href}
						class="text-lg hover:underline text-center {menu.href === $page.route.id
							? 'text-green'
							: ''}"
						on:mouseup={() => {
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
					class="hover:animate-rainbow inline-block"
					on:mouseup={() => {
						menuOpen = false;
					}}
				>
					<GitHub className="h-7 w-7" />
				</a>

				<a
					href="https://codeberg.org/StrangeGirlMurph"
					class="inline-block"
					on:mouseup={() => {
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
