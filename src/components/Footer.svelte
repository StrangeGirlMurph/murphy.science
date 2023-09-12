<script lang="ts">
	let murphy = 'Murphy';
	let interval: NodeJS.Timer;

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
			Copyright © 2023&nbsp;<span class="absolute" on:mouseenter={grow} on:mouseleave={shrink}>
				{murphy}
			</span>
		</div>
	</div>

	<a
		class="sm:hover:animate-bounce w-fit h-fit flex items-center justify-center gap-[6px] bg-gradient-to-br from-[#ff4ea3] to-[#ff5e5c] py-[7px] px-[10px] text-l font-semibold rounded-lg"
		href="/support"
	>
		<span class="text-zinc-100 hidden sm:block">Support Me</span>
		<span class="text-zinc-100 sm:hidden">Sponsor</span>
	</a>
</footer>
