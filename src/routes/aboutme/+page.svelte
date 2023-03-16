<script>
	import Links from '../../components/Links.svelte';
</script>

<svelte:head>
	<title>About Me | Murphy</title>
	<meta name="description" content="A little bit about me as a person." />
</svelte:head>

<div class="heading">
	<h1 class="title md:before:content-['🥑_'] md:after:content-['_🐬']">About Me</h1>
	<h2 class="subtitle">Learn a bit about me as a person.</h2>
</div>

<div class="flex flex-col lg:flex-row items-center lg:items-start lg:gap-8">
	<div class="w-full">
		<h1>Who am I?</h1>
		<section>
			<p>
				In a nutshell I am a young, left and queer girl called Murphy. I go by she/her pronouns but
				they/them is also fine. I live in a great city somewhere on planet Earth (hint: UTC+1). I
				love to learn and some of my greatest strengths are my ability to be very disciplined when I
				need and want to, my empathy, my pride and my incredible motivation to save this world. In
				May 2020 I built my first computer (named <a
					href="https://interstellarfilm.fandom.com/wiki/TARS"
					class="link">TARS</a
				>). Since then my knowledge has basically increased exponentially and I learned a ton about
				science and specifically computer science and just never stopped. My true passion is
				physics. I had an amazing physics teacher in school and learned so much from him. There is
				to much pain and suffering in the world though for me to just follow my passion and learn
				about some particles which are so small that no one will ever be able to see them. That's
				why I am dedicating a lot of my attention towards computer science instead. I can do a lot
				more relevant for the world with software then I could with studying quantum mechanics. And
				I think AI has an incredible potential to boost all kinds scientific research. I mean just
				look at what <a href="https://www.deepmind.com/" class="link">DeepMind</a> is already
				achieving with
				<a class="link" href="https://www.deepmind.com/research/highlighted-research/alphafold"
					>AlphaFold</a
				>
				for example. Now back to the important things though: I LOVE How I Met Your Mother 😊. For me
				it's the single greatest piece of art ever created! You should watch it if you haven't already!
				<br />
				Oh and I like <a href="/cats" class="hover:gradient">cats</a> :)
			</p>
		</section>
	</div>

	<img class="rounded-full w-[340px] mb-8" src="/profile.png" alt="profile" />
</div>

<h1>What do I do with my life?</h1>
<section>
	<p>
		I want to save the world and make it a better place. I want to fight the pain and suffering. I
		can't survive just watching humans suffer all over the world and not doing anything about it. I
		am way to empathetic for that. Their pain is my pain. I am good at and love science.
		Specifically computer science, mathematics and physics which is also exactly what I am currently
		studying at university. As I already mentioned in the "Who am I?" section my future work will
		mostly have to do with cs though. Currently I am in the filling my brain with skills and
		knowledge section of my life but I am also already producing some small results. In the future I
		want to work on all kinds of problems. Always not for profit of course. With my education I
		could do all kinds of things like working on the transition to sustainable energy production,
		nuclear fusion, climate models or very applied projects to educate, feed or protect humans to
		name a very few. The possibilities for me to help humankind and help save the world are endless.
		I am basically a workaholic and code a lot... My desire and motivation to help humans is pretty
		unique.
	</p>
</section>

<h1>Contact me</h1>
<section>
	<p>
		If you want to contact me, you can do so via email. You can also try some other ways like the
		discussions tab on my GitHub README Repo <a
			class="link"
			href="https://github.com/StrangeGirlMurph/StrangeGirlMurph/discussions">here</a
		>. You'll find a way. When you do so please introduce yourself and tell me a bit about yourself
		that I know who I am talking to. I am always happy to get some feedback.
	</p>
	<Links
		links={[
			{
				href: `mailto:hello@murphy-in.space`,
				type: `mail`,
				name: `hello@murphy-in.space`
			}
		]}
	/>
</section>
