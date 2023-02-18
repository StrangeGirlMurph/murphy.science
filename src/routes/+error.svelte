<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error {$page.status} | Murphy</title>
	<meta name="description" content="Error {$page.status}." />
</svelte:head>

<div class="heading">
	<h1 class="title md:before:content-['😥'] md:after:content-['💔']">
		Error {$page.status}
	</h1>
	<h2 class="subtitle">
		{$page.error?.message} :(
	</h2>
</div>
