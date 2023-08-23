<script lang="ts">
	import FileDocumentOutline from 'svelte-material-icons/FileDocumentOutline.svelte';
	import GitHub from 'svelte-material-icons/Github.svelte';
	import Link from 'svelte-material-icons/Link.svelte';
	import EmailOutline from 'svelte-material-icons/EmailOutline.svelte';
	import FilePdfBox from 'svelte-material-icons/FilePdfBox.svelte';

	export let links: {
		name: string;
		href: string;
		type: 'github' | 'link' | 'pdf' | 'mail' | 'file';
	}[];
</script>

<ul class="mt-4">
	{#each links as link}
		<li class="my-2">
			<a href={link.href} class="flex items-center gap-2">
				{#if link.type === `github`}
					<GitHub class="h-6 w-6 flex-shrink-0" />
				{:else if link.type === `file`}
					<FileDocumentOutline class="h-6 w-6 flex-shrink-0" />
				{:else if link.type === `pdf`}
					<FilePdfBox class="h-6 w-6 flex-shrink-0" />
				{:else if link.type === `mail`}
					<EmailOutline class="h-6 w-6 flex-shrink-0" />
				{:else}
					<Link class="h-6 w-6 flex-shrink-0" />
				{/if}
				<span class="link text-lg">{link.name}</span>
			</a>
		</li>
	{/each}
</ul>
