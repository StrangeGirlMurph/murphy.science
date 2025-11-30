<script>
	import Links from '../../components/Links.svelte';
</script>

<svelte:head>
	<title>Side Projects | Murphy</title>
	<meta name="description" content="A few of the million side projects I am working on." />
</svelte:head>

<div class="heading">
	<h1 class="title">Side Projects</h1>
	<h2 class="subtitle">An overview of my side projects in no particular order.</h2>
</div>

<h1>OpenStreetMap</h1>
<section>
	<p>
		Since October 2025 I am <em>really</em> addicted to mapping for the
		<a class="link" href="https://www.openstreetmap.org/about">OpenStreetMap (OSM)</a>. It's just
		soo much fun. A video game that benifits the world really. It really tickles my brain in the
		right way. I can highly recommed trying it yourself! Simply visit
		<a class="link" href="https://www.openstreetmap.org/">openstreetmap.org</a>, hit the big "Edit"
		button, create an account and start mapping! The iD editor gives you a quick and easy
		introduction and is very easy to use :) Sadly it's not easy to make time for it :(
	</p>
	<Links
		links={[
			{
				name: `OSM Profile`,
				type: `link`,
				href: `https://www.openstreetmap.org/user/StrangeGirlMurph`
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
		when I notice something is wrong. (Software) projects I contributed to (wrote code for) (the list
		of issues is much longer):
	</p>
	<Links
		links={[
			{
				name: `tootpick.org | Repository`,
				type: `github`,
				href: `https://github.com/Juerd/tootpick`
			},
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

<h1>Self-hosting on my Server</h1>
<section>
	<p>
		Self-hosting different open-source services is something I am really interested in. I just
		recently started and already learned a ton. My Beelink S12 Pro Mini at home has been running day
		and night without trouble. I am using <a class="link" href="https://caddyserver.com/">Caddy</a>
		as a reverse proxy and using
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
		>. I finally got to ditch Google Drive and Google Photos! My dashboard lists every service I am
		hosting (pls don't hack or DDoS me 🥺):
	</p>
	<Links
		links={[
			{
				name: `server.murphy.science | Dashboard`,
				type: `link`,
				href: `https://server.murphy.science`
			}
		]}
	/>
</section>

<h1>Operating Systems</h1>
<section>
	<p>
		My journey with different operating systems was quite a long one. On mobile I started with iOS
		on the Apple iPod touch then continued with Samsungs Android for about 6/7 years and then for 5
		years with Pixels Android until the end of 2025 when I switched to Graphene OS on my Pixel 4a
		(still a great phone). My migration to Graphene OS came with a lot of work on my server
		infrastructure and degoogling (see above). On desktop I started out with MacOS for about 5
		years, then switched to Windows in 2020 until I eventually switched to Linux. First to Arch
		Linux at the end of 2022 and then to NixOS at the end of 2024. I tried using Hyprland but wasn't
		happy with it so I just sticked with KDE Plasma. The switch to NixOS and making basically my
		whole configuration declarative was quite the effort. It took me basically forever to switch but
		it was worth it. Linux is the best! On my Laptop I have a dual-boot system with Windows for rare
		cases where I need PowerPoint, Zoom or a projection working without complications. On my PC I
		have a system with my original Windows 11, Arch Linux and NixOS System. I also have a boot
		option for another linux system to play around with. Storage is so cheap these days and over
		countless reinstalls I've became quite good at managing multi-boot systems. Even though I
		finished the major act of switching to Graphene OS and from Arch to NixOS these systems are
		still evolving and I enjoy tinkering on them. That's why they are still kind of an open project
		even though using them has become a rather boring default (that's a good think! things should
		just work!).
	</p>
	<Links
		links={[
			{
				name: `NixOS`,
				type: `link`,
				href: `https://nixos.org/`
			},
			{
				name: `Graphene OS`,
				type: `link`,
				href: `https://grapheneos.org/`
			}
		]}
	/>
</section>

<h1>Coding Projects & monthly Jams</h1>
<section>
	<p>
		As I mentioned in the context of Jambo on the <a class="link" href="/work">work page</a>, I am
		part of an international Discord server where we do monthly coding jams/hackathons. From there
		and just my every day life I have a whole repository full of small projects like riddles,
		challenges and all kinds of thingies. I like to participate in the Advent of Code every year or
		do something fun for the Pi-Day for example and I get a lot of inspiration from YouTube. Most of
		the projects are not finished nor polished at all 🙃 And that's okay! This is my having fun
		repository. Sadly with everything else in our lifes we barely find the time to stick to our
		monthly schedule on the server anymore. We're now all busy with university or work.
	</p>
	<Links
		links={[
			{
				name: `CodingProjects | Repository`,
				type: `github`,
				href: `https://github.com/StrangeGirlMurph/CodingProjects`
			}
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
		love with Deno but I was just way too new to web development and wasn't up for it. Then I used
		<a href="https://nuxt.com/" class="link">Nuxt</a> but it wasn't a good fit either. I really don't
		like web development but it's kinda just what you have to learn in order to built things like this...
		I am pretty happy with SvelteKit now though :) I also have a private wiki about me for friends and
		another personal website for projects like birthday presents. Both of them are password protected.
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
