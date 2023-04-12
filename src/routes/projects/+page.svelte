<script>
	import Links from '../../components/Links.svelte';
</script>

<svelte:head>
	<title>Side Projects | Murphy</title>
	<meta name="description" content="A few of the million side projects I am working on." />
</svelte:head>

<div class="heading">
	<h1 class="title md:before:content-['🐢_'] md:after:content-['_👩‍💻']">Side Projects</h1>
	<h2 class="subtitle">An overview of smaller side projects.</h2>
</div>

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
		>). Software projects I contributed to:
	</p>
	<Links
		links={[
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
		fun for the Pi-Day. Most of the projects are not finished nor polished at all 🙃. And that's
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
	<a href="/">murphy-in.space</a>
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
				name: `murphy-in.space | Repository`,
				type: `github`,
				href: `https://github.com/StrangeGirlMurph/murphy-in.space`
			}
		]}
	/>
</section>
