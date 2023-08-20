/** @type {import('./$types').PageLoad} */
export async function load() {
	const res = await fetch(
		'https://api.github.com/repos/StrangeGirlMurph/obsidian-wikipedia-search/releases'
	);

	const json = await res.json().catch((err) => undefined);
	if (!json) return {downloads: undefined};
	return {downloads: json.map((e: any) => e.assets[0].download_count ?? 0).reduce((a: number, b: number) => a + b)};
}
