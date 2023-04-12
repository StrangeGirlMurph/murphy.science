<script>
	import Links from '../../components/Links.svelte';
</script>

<svelte:head>
	<title>University | Murphy</title>
	<meta name="description" content="University related infos." />
</svelte:head>

<div class="heading">
	<h1 class="title md:before:content-['🌳_'] md:after:content-['_👩‍🎓']">University</h1>
	<h2 class="subtitle">Some resources I want to share with my fellow students.</h2>
</div>

<h1>Scientific Knowledge Base</h1>
<section>
	<p>
		During my studies I take a lot of notes. All these notes and everything else I learn which I
		also written down somewhere ends up in my knowledge base. It's an <a
			class="link"
			href="http://obsidian.md">Obsidian</a
		>
		vault written in German which I share with everyone over a GitHub repo under a
		<a class="link" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
			CC BY-NC-SA 4.0 License</a
		>. The vault is basically my own little Wikipedia with all the definitions, concepts, theorems
		and so on I learn. Because it's all written in German mostly my fellow students from Uni and
		maybe some other German speaking people will find it useful and get something out of it. I hope
		to some day be able to publish it on the internet in a more accessible way with Obsidian Publish
		for example.
	</p>
	<Links
		links={[
			{
				name: `Knowledge-Base | Repository`,
				type: `github`,
				href: `https://github.com/StrangeGirlMurph/Knowledge-Base`
			}
		]}
	/>
</section>

<h1>History</h1>
<section>
	<p>
		I am currently studying Computer Science, Mathematics & Physics. It's a tough combination of all
		three disciplines. I am having the same courses as the regular math/physics/cs students. Just
		not all of them and my bachelor is longer. Before I started this bachelor I studied Computer
		Science & Computational Science somewhere else for a year. It allowed me to take courses on
		physics and cognitive neurosciences but it was just too applied for me and tbh too easy. Plus I
		wanted more and serious math. Not just math for cs.
	</p>
</section>
