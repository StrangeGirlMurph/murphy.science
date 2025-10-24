<script lang="ts">
	import GitHub from './icons/GitHub.svelte';
	import FileDocument from './icons/FileDocument.svelte';
	import FilePdf from './icons/FilePdf.svelte';
	import Email from './icons/Email.svelte';
	import Link from './icons/Link.svelte';
	import Codeberg from './icons/Codeberg.svelte';

	export let links: {
		name: string;
		href: string;
		type: 'github' | 'codeberg' | 'link' | 'pdf' | 'mail' | 'file';
	}[];
</script>

<ul class="mt-4">
	{#each links as link}
		<li class="my-2">
			<a href={link.href} class="flex max-w-fit items-center gap-2">
				{#if link.type === `github`}
					<GitHub className="h-6 w-6 flex-shrink-0" />
				{:else if link.type === `codeberg`}
					<Codeberg className="h-6 w-6 flex-shrink-0" />
				{:else if link.type === `file`}
					<FileDocument className="h-6 w-6 flex-shrink-0" />
				{:else if link.type === `pdf`}
					<FilePdf className="h-6 w-6 flex-shrink-0" />
				{:else if link.type === `mail`}
					<Email className="h-6 w-6 flex-shrink-0" />
				{:else}
					<Link className="h-6 w-6 flex-shrink-0" />
				{/if}
				<span class="link text-lg">{link.name}</span>
			</a>
		</li>
	{/each}
</ul>
