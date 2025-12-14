<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error {$page.status} | Murphy</title>
	<meta name="description" content="Error {$page.status}." />
</svelte:head>

<div class="heading">
	<h1>
		Error {$page.status}
	</h1>
	<p class="subtitle">
		{$page.error?.message} :(
	</p>
</div>
