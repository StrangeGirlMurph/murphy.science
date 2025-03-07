<script>
	import Links from '../../components/Links.svelte';
</script>

<svelte:head>
	<title>Side Projects | Murphy</title>
	<meta name="description" content="A few of the million side projects I am working on." />
</svelte:head>

<div class="heading">
	<h1 class="title">Side Projects</h1>
	<h2 class="subtitle">An overview of smaller side projects.</h2>
</div>

<h1>Self-hosting/Server</h1>
<section>
	<p>
		Self-hosting different open-source services is something I am really interested in. I just
		recently started and already learned a ton. My Free Oracle Cloud Server in Frankfurt named Atlas
		has been running day and night without much trouble. I am using <a
			class="link"
			href="https://caddyserver.com/">Caddy</a
		>
		as a web server and using
		<a class="link" href="https://nixos.org/">NixOS</a> as the operating system. Nix and
		<a class="link" href="https://www.docker.com/">Docker</a>/<a
			class="link"
			href="https://docs.docker.com/compose/">Docker Compose</a
		>
		make it really easy to deploy services. Just look at what it takes to setup Audiobookshelf for example:
		<a
			class="link"
			href="https://search.nixos.org/options?channel=unstable&from=0&size=50&sort=relevance&type=packages&query=services.audiobookshelf"
			>NixOS Audiobookshelf Options</a
		>.
	</p>
	<Links
		links={[
			{
				name: `server.murphy.science | Homepage Dashboard`,
				type: `link`,
				href: `https://server.murphy.science`
			},
			{
				name: `grafana.murphy.science | Grafana`,
				type: `link`,
				href: `https://grafana.murphy.science`
			},
			{
				name: `cloud.murphy.science | Nextcloud AIO`,
				type: `link`,
				href: `https://cloud.murphy.science`
			},
			{
				name: `git.murphy.science | Forgejo`,
				type: `link`,
				href: `https://git.murphy.science`
			},
			{
				name: `spotify.murphy.science | Your Spotify`,
				type: `link`,
				href: `https://spotify.murphy.science`
			},
			{
				name: `mastodon.murphy.science | Mastodon`,
				type: `link`,
				href: `https://mastodon.murphy.science`
			},
			{
				name: `media.murphy.science | Jellyfin`,
				type: `link`,
				href: `https://media.murphy.science`
			},
			{
				name: `audiobooks.murphy.science | Audiobookshelf`,
				type: `link`,
				href: `https://audiobooks.murphy.science`
			}
		]}
	/>
</section>

<h1>Open-Source Contributions</h1>
<section>
	<p>
		I am a big fan of open-source software and I try to contribute to projects whenever I got the
		time and I find some bug or I am looking for a new feature. Sometimes these are just very small
		things. Sometimes I really get into it. I also like to contribute to the <a
			class="link"
			href="https://wikipedia.org">Wikipedia</a
		>
		when I notice something is wrong (<a
			class="link"
			href="https://en.wikipedia.org/wiki/User:StrangeGirlMurph">Wiki Userpage</a
		>). (Software) projects I contributed to (wrote code for) (the list of issues is much longer):
	</p>
	<Links
		links={[
			{
				name: `physica package for Typst | Repository`,
				type: `github`,
				href: `https://github.com/Leedehai/typst-physics`
			},
			{
				name: `typst | Repository`,
				type: `github`,
				href: `https://github.com/typst/typst`
			},
			{
				name: `obsidian-latex-suite | Repository`,
				type: `github`,
				href: `https://github.com/artisticat1/obsidian-latex-suite`
			},
			{
				name: `archinstall | Repository`,
				type: `github`,
				href: `https://github.com/archlinux/archinstall`
			},
			{
				name: `Arch User Repository | ArchWiki`,
				type: `link`,
				href: `https://wiki.archlinux.org/title/Arch_User_Repository`
			},
			{
				name: `enmap | Repository`,
				type: `github`,
				href: `https://github.com/eslachance/enmap`
			}
		]}
	/>
</section>

<h1>Coding Projects & monthly Jams</h1>
<section>
	<p>
		As I mentioned in the context of Jambo on the <a class="link" href="/work">work page</a>, I am
		part of Discord server where we do monthly coding jams. From there and just my every day life I
		have a whole repository full of small projects like riddles, challenges and all kinds of
		thingies. For example do I like to participate in the Advent of Code every year or do something
		fun for the Pi-Day. Most of the projects are not finished nor polished at all 🙃 And that's
		okay! This is my having fun repository.
	</p>
	<Links
		links={[
			{
				name: `CodingProjects | Repository`,
				type: `github`,
				href: `https://github.com/StrangeGirlMurph/CodingProjects`
			}
			/* {
				name: `Coding-Jams | Repository`,
				type: `github`,
				href: `https://github.com/Cowoding-Jams/Coding-Jams`
			} */
		]}
	/>
</section>

<h1>
	<a href="/">murphy.science</a>
</h1>
<section>
	<p>
		I guess this website is also one of my side projects. I build it with <a
			class="link"
			href="https://kit.svelte.dev/">SvelteKit</a
		>, <a class="link" href="https://tailwindcss.com/">Tailwind</a> and deployed it with
		<a class="link" href="https://vercel.com/">Vercel</a>. First I tried using
		<a href="https://fresh.deno.dev/" class="link">Fresh</a>, Deno and Deno Deploy because I fell in
		love with Deno but I am just way too new to web development and wasn't up for it. Then I used
		<a href="https://nuxt.com/" class="link">Nuxt</a> but it wasn't a good fit either. I really don't
		like web development but it's kinda just what you have to learn in order to built things like this...
		I am pretty happy with SvelteKit now though :)
	</p>
	<Links
		links={[
			{
				name: `murphy.science | Repository`,
				type: `github`,
				href: `https://github.com/StrangeGirlMurph/murphy.science`
			}
		]}
	/>
</section>
