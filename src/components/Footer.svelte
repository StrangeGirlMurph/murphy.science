<script lang="ts">
	import GitHubSponsorButton from './GitHubSponsorButton.svelte';

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

<footer class="flex flex-row gap-2 justify-between content-center items-center mt-4 w-full">
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

	<GitHubSponsorButton />
</footer>
