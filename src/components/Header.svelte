<script setup>
	import { page } from '$app/stores';
	import GitHub from 'svelte-material-icons/Github.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	export const menus = [
		{ name: 'Home', href: '/' },
		{ name: 'About Me', href: '/aboutme' },
		{ name: 'Work', href: '/work' },
		{ name: 'Side Projects', href: '/projects' },
		{ name: 'University', href: '/university' }
	];

	function test() {
		console.log('test');
	}
</script>

<header class="w-full">
	<nav class="flex flex-col md:flex-row gap-6 justify-between">
		<div class="flex items-center flex-grow-0 gap-3 group">
			<a href="https://ko-fi.com/murph" class="group-hover:animate-spin-slow">
				<img src="/profile-25.png" alt="pfp" class="h-10 w-10 rounded-full" />
			</a>
			<a href="/" class="text-2xl font-bold"> Murphy </a>
		</div>

		<ul class="flex flex-wrap items-center gap-5 justify-center">
			{#each menus as menu}
				<li>
					<a
						href={menu.href}
						class="text-lg hover:underline text-center {menu.href === $page.route.id
							? 'text-green'
							: ''}"
					>
						{menu.name}
					</a>
				</li>
			{/each}
			<li class="flex items-center">
				<a href="https://github.com/StrangeGirlMurph" class="hover:animate-rainbow inline-block">
					<GitHub class="h-8 w-8" />
				</a>
			</li>
			<li class="flex items-center">
				<ThemeToggle />
			</li>
		</ul>
	</nav>
</header>
