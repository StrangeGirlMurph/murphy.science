<script>

	import Links from "../../components/Links.svelte";

</script>
<svelte:head>
    <title>Side Projects | Murphy</title>
    <meta name="description" content="A few of the million side projects I am working on." />
</svelte:head>

<div class="heading">
    <h1 class="title md:before:content-['🐢'] md:after:content-['👩‍💻']">
        Side Projects
    </h1>
    <h2 class="subtitle">
        An overview of smaller side projects.
    </h2>
</div>

<h1>
    Coding Projects & monthly Jams
</h1>
<section>
    <p>
        As I mentioned in the context of Jambo on the <a class="link" href="/work">work page</a>, I am part of Discord server where we do monthly coding jams. From there and just my every day life I have a whole repository full of small projects like riddles, challenges and all kinds of thingies. For example do I like to participate in the Advent of Code every year or do something fun for the Pi-Day. Most of the projects are not finished nor polished at all 🙃. And that's okay! This is my having fun repository.
    </p>
    <Links links={[{ name: `CodingProjects | Repository`, type: `github`, href: `https://github.com/StrangeGirlMurph/CodingProjects` }, { name: `Coding-Jams | Repository`, type: `github`, href: `https://github.com/Cowoding-Jams/Coding-Jams` }]} />
</section>

<h1>
    <a href="/">murphy-in.space</a>
</h1>
<section>
    <p>
        I guess this website is also one of my side projects. I build it with <a class="link" href="https://nuxt.com/">Nuxt 3</a>, <a class="link" href="https://tailwindcss.com/">Tailwind</a> and deployed it with <a class="link" href="https://vercel.com/">Vercel</a>. First I tried using Fresh, Deno and Deno Deploy because I fell in love with Deno but I am just way to new to web development and wasn't up for it. I really don't like web development but it's kinda just what you have to learn in order to built things like this... Maybe SvelteKit will be the right thing for me 🤷‍♀️
    </p>
    <Links links={[{ name: `murphy-in.space | Repository`, type: `github`, href: `https://github.com/StrangeGirlMurph/murphy-in.space` }]} />
</section>

<h1>
    Wikipedia
</h1>
<section>
    <p>
        I also like to contribute to Wikipedia when I have the time and notice something is wrong.
    </p>
    <Links links={[{ name: `Wikipedia | Userpage`, type: `link`, href: `https://en.wikipedia.org/wiki/User:StrangeGirlMurph` }]} />
</section>