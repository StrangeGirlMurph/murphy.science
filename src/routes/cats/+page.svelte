<script lang="ts">
	export let data: any;
</script>

<svelte:head>
	<title>Cats | Murphy</title>
	<meta name="description" content="Some cute cats :)" />
</svelte:head>

<h1 class="sr-only">Cats & Kittens</h1>

<div class="grow flex flex-col items-center justify-center max-h-full my">
	<div>
		<a href={data['links']['html']} aria-label="View photo on Unsplash">
			<img
				class="max-h-[60vh] rounded-sm shadow-md"
				src={data['urls']['regular']}
				alt={data['alt_description'] ??
					data['description'] ??
					'No description was provided by the creator. Sorry. I am sure the next one will have one! Please reload.'}
			/>
		</a>
		<div class="mt-1">
			Photo by <a class="link" href={data['user']['links']['html']}>{data['user']['name']}</a> on
			<a class="hover:underline" href="https://unsplash.com/">Unsplash</a>
		</div>
	</div>

	<form method="post">
		<button type="submit" class="mt-4 link" aria-label="Load more cat photos">
			<b><i>MORE CATS!</i></b>
		</button>
	</form>
</div>
