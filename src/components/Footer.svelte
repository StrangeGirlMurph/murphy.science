<script>
	import GitHub from 'svelte-material-icons/Github.svelte';
</script>

<footer
	class="flex flex-col-reverse sm:flex-row gap-2 justify-between content-center sm:items-center mt-4 w-full"
>
	<div class="space-y-1">
		Made by me the
		<a href="https://github.com/StrangeGirlMurph" class="text-fav hover:underline">
			StrangeGirlMurph
		</a>
		<div class="text-gray-500 text-xs">
			Copyright © 2023 <span class="hover:animate-rainbow">Murphy</span>
		</div>
	</div>

	<a
		class="hover:animate-bouncy w-[250px] flex items-center justify-center gap-[6px] bg-gradient-to-r from-[#ff4ea3] to-[#ff5e5c] py-[7px] px-[10px] text-l font-semibold text-white rounded-lg"
		href="https://github.com/sponsors/StrangeGirlMurph"
	>
		Support me on GitHub <GitHub class="h-6 w-6 inline-block" />
	</a>
</footer>
