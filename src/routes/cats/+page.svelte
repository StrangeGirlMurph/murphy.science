<script lang="ts">
	export let data: any;
</script>

<svelte:head>
	<title>Cats | Murphy</title>
	<meta name="description" content="Some cute cats :)" />
</svelte:head>

<!-- <div class="heading mb-10">
	<h1 class="title md:before:content-['🥰_'] md:after:content-['_🐈‍⬛']">Cats & Kittens</h1>
	<h2 class="subtitle">You found the secret kittens! (Reload for more 💕)</h2>
</div> -->

<div class="grow flex flex-col items-center justify-center max-h-full my">
	<div>
		<a href={data['links']['html']}>
			<img
				class="max-h-[60vh] rounded-sm shadow-md"
				src={data['urls']['regular']}
				alt={data['alt_description']}
			/>
		</a>
		<div class="m-1">
			Photo by <a class="link" href={data['user']['links']['html']}>{data['user']['name']}</a> on
			<a class="link text-black" href="https://unsplash.com/">Unsplash</a>
		</div>
	</div>

	<form method="post">
		<button
			class="flex mt-4 items-center justify-center bg-gradient-to-br from-[#ff4ea3] to-[#ff5e5c] p-2 font-semibold rounded-lg"
		>
			MORE CATS!</button
		>
	</form>
</div>
