import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(
		'https://api.github.com/repos/StrangeGirlMurph/obsidian-wikipedia-helper/releases'
	);

	if (!res.ok) {
		return { downloads: undefined };
	}

	const json = await res.json().catch((_err: unknown) => undefined);
	if (!json || !Array.isArray(json)) return { downloads: undefined };
	return {
		downloads: json
			.map((e: any) => e.assets?.[1]?.download_count ?? 0)
			.reduce((a: number, b: number) => a + b, 0)
	};
};
