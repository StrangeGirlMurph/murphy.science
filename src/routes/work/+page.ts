/** @type {import('./$types').PageLoad} */
export async function load() {
	const res = await fetch(
		'https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json'
	);

	const json = await res.json().catch((err) => undefined);
	if (!json) return {downloads: undefined};
	return {downloads: json['wikipedia-search']['downloads']};
}
