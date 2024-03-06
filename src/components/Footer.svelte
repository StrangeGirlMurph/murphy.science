<script lang="ts">
	let murphy = 'Murphy';
	let interval: any;

	function grow() {
		clearInterval(interval);
		interval = setInterval(append, 50);
	}

	function shrink() {
		clearInterval(interval);
		interval = setInterval(remove, 20);
	}

	function append() {
		murphy = murphy + 'y';
	}

	function remove() {
		if (murphy === 'Murphy') {
			clearInterval(interval);
			return;
		}
		murphy = murphy.slice(0, -1);
	}
</script>

<footer class="flex flex-row gap-4 justify-between content-center items-center mt-4 w-full">
	<div class="space-y-1">
		Made by me the
		<a href="https://github.com/StrangeGirlMurph" class="text-green hover:underline">
			StrangeGirlMurph
		</a>
		<div class="text-xs alt-color">
			Copyright © 2024&nbsp;<span
				aria-hidden="true"
				class="absolute"
				on:mouseenter={grow}
				on:mouseleave={shrink}
			>
				{murphy}
			</span>
		</div>
	</div>

	<a
		class="sm:hover:animate-bounce flex items-center justify-center bg-gradient-to-br from-[#ff4ea3] to-[#ff5e5c] p-2 font-semibold rounded-lg"
		href="/support"
	>
		<span class="text-neutral-100 hidden sm:block">Support Me</span>
		<span class="text-neutral-100 sm:hidden">Sponsor</span>
	</a>
</footer>
