<script setup>
	import { page } from '$app/stores';
	import GitHub from 'svelte-material-icons/Github.svelte';
	import Menu from 'svelte-material-icons/Menu.svelte';
	import MenuOpen from 'svelte-material-icons/MenuOpen.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { onMount } from 'svelte';

	export const menus = [
		{ name: 'Home', href: '/' },
		{ name: 'About Me', href: '/aboutme' },
		{ name: 'Work', href: '/work' },
		{ name: 'Side Projects', href: '/projects' },
		{ name: 'University', href: '/university' }
	];

	let menuOpen = false;

	onMount(() => {
		window.onresize = () => {
			if (window.innerWidth >= 768) menuOpen = false;
		};
	});
</script>

<header class="w-full">
	<nav class="flex flex-row justify-between">
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
				<MenuOpen class="h-8 w-8" />
				<span class="fixed inset-0" />
			{:else}
				<Menu class="h-8 w-8" />
			{/if}
		</button>
		<ul
			class="md:flex flex-col md:flex-row items-center gap-4 justify-center {!menuOpen
				? 'hidden'
				: 'flex absolute background p-6 rounded-l-xl gap-6 shadow-xl top-[70px] right-0'}"
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
					<GitHub class="h-8 w-8" />
				</a>
				<ThemeToggle />
			</li>
		</ul>
	</nav>
</header>
