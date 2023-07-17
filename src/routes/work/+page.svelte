<script>
	import Links from '../../components/Links.svelte';
</script>

<svelte:head>
	<title>Work | Murphy</title>
	<meta name="description" content="Overview of my work." />
</svelte:head>

<div class="heading">
	<h1 class="title md:before:content-['🫐_'] md:after:content-['_🖥️']">Work</h1>
	<h2 class="subtitle">An overview of my rather serious work.</h2>
</div>

<h1>Obsidian Wikipedia Search Plugin</h1>
<section>
	<p>
		A plugin for the note taking app <a class="link" href="https://obsidian.md/">Obsidian</a> that
		uses the <a class="link" href="https://wikipedia.org">Wikipedia</a> API to let the user search, link
		and open Wikipedia articles directly in their notes from within the app. I built it because I was
		looking for that functionality myself when writing about scientific stuff. It just makes it so much
		more convenient to gather knowledge. The plugin is available in the community plugin list and has
		currently over 1600 downloads.
	</p>
	<Links
		links={[
			{
				name: `obsidian-wikipedia-search | Repository`,
				type: `github`,
				href: `https://github.com/StrangeGirlMurph/obsidian-wikipedia-search`
			}
		]}
	/>
</section>

<h1>The Humane Software License</h1>
<section>
	<p>
		A software license to change the world! All the code I write and publish is in some way or
		another there to save the world. I was looking for a software license that encapsulates this
		passion and ease my fear of people abusing my work for their malicious purposes but could only
		really find the <a class="link" href="https://anticapitalist.software/"
			>Anti-Capitalist Software License</a
		> and so ended up creating my own license instead. From the projects README: "The HSL is meant to
		accompany software that empowers individuals, collectives, worker-owned cooperatives, and nonprofits
		who follow the UN Universal Declaration of Human Rights, while denying usage to those that exploit
		labor for profit and don't care about the moral consequences of their actions." Nearly all my projects
		are now licensed under the HSL and I am pretty happy with it so far. You should take a look, give
		it a try and tell your friends about it!
	</p>
	<Links
		links={[
			{
				name: `The-Humane-Software-License | Repository`,
				type: `github`,
				href: `https://github.com/StrangeGirlMurph/The-Humane-Software-License`
			}
		]}
	/>
</section>

<h1>Introduction to Fractals and Holomorphic Dynamics</h1>
<section>
	<p>
		An article I wrote for my university course "Scientific Computing in Mathematica". It is an
		introduction into fractal geometry and holomorphic dynamics being the mathematical foundation
		for some of the most well known fractals which I also cover. I created all the visuals myself in
		Mathematica 13. You can run and edit them yourself by downloading the source code from below. I
		wrote it in my second uni semester but to read and understand it only a bit of mathematical
		notation is required to understand it. It's highly influenced by <a
			href="https://www.youtube.com/@3blue1brown"
			class="link">3Blue1Brown</a
		>s incredible videos on the topic! My personal highlight of the article is the section covering
		and showing the bifurcation diagram of the logistic map hiding in the Mandelbrot set plotted in
		three dimensions. Don't worry these terms don't have to mean anything to you right now. Just
		start reading and dive into the wonderful, beautiful, fascinating and weird world of fractal
		geometry!
	</p>
	<Links
		links={[
			{
				name: `Introduction to Fractals and Holomorphic Dynamics | Article (.pdf)`,
				type: `pdf`,
				href: `/work/Introduction_to_Fractals_and_Holomorphic_Dynamics.pdf`
			},
			{
				name: `Mathematica 13 | Source Code (.nb)`,
				href: `/work/Introduction_to_Fractals_and_Holomorphic_Dynamics.nb`,
				type: 'file'
			}
		]}
	/>
</section>

<h1>Facial Landmark Detection</h1>
<section>
	<p>
		A project on facial landmark detection on facecam input I did for my university course "Deep
		Learning". Even though the article was written together with two others I did all the coding. I
		used <a href="https://www.tensorflow.org/" class="link">TensorFlow</a> and a
		<a class="link" href="https://en.wikipedia.org/wiki/Convolutional_neural_network"
			>convolutional neural network</a
		>
		with a dataset from <a href="https://www.kaggle.com/" class="link">Kaggle</a>. The project was
		my first experience with the development of real world machine learning applications. I had fun
		optimizing some custom masked loss functions but by far the biggest and most time consuming part
		was dealing with the data and building the "infrastructure"...
	</p>
	<Links
		links={[
			{
				name: `Facial Landmark Detection | Article (.pdf)`,
				type: `pdf`,
				href: `/work/Facial_Landmark_Detection.pdf`
			},
			{
				name: `Facial-Landmark-Detection | Repository`,
				type: `github`,
				href: `https://github.com/StrangeGirlMurph/Facial-Landmark-Detection`
			}
		]}
	/>
</section>

<h1>Jambo ⁘ Discord Bot</h1>
<section>
	<p>
		A Discord bot to manage a whole game jam/hackathon server from a fully functional poll system to
		managing color roles. I am the owner of a Discord server called Cowoding Jams where we host
		monthly coding jams. Because organizing them with collecting all the proposals and creating
		polls with complicated websites was way too much work we went the "programmer way" and spent
		nearly a year developing our own Discord bot as a group project to handle all those things for
		us :) We are about 7 active developers. We are more people on the server though. Check out the <a
			href="https://github.com/Cowoding-Jams/Jambo/wiki"
			class="link">wiki</a
		> to learn more about its features and create your own server with it!
	</p>
	<Links
		links={[
			{ name: `Jambo | Repository`, type: `github`, href: `https://github.com/Cowoding-Jams/Jambo` }
		]}
	/>
</section>
