<script lang="ts">
	export let data: any;
</script>

<svelte:head>
	<title>Cats | Murphy</title>
	<meta name="description" content="Some cute cats :)" />
</svelte:head>

<div class="heading mb-14 mt-24">
	<h1 class="title md:before:content-['🥰'] md:after:content-['🐈‍⬛']">Cats & Kittens</h1>
	<h2 class="subtitle">You found the secret kittens! (Reload for more 💕)</h2>
</div>

<div class="flex flex-col items-center max-h-full">
	<div>
		<a href={data['links']['html']}>
			<img
				class="max-h-[60vh] rounded-sm"
				src={data['urls']['regular']}
				alt={data['alt_description']}
			/>
		</a>
		<div class="m-1">
			Photo by <a class="link" href={data['user']['links']['html']}>{data['user']['name']}</a> on
			<a class="link text-black" href="https://unsplash.com/">Unsplash</a>
		</div>
	</div>
</div>
