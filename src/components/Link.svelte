<script>
	export let className = '';
	export let href = '#';
</script>

<a class="link {className}" {href}>
	<slot />
</a>
