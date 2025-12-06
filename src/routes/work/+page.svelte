<script lang="ts">
	import Link from '../../components/Link.svelte';
	import Links from '../../components/Links.svelte';
	export let data;
</script>

<svelte:head>
	<title>Work | Murphy</title>
	<meta name="description" content="Overview of my work." />
</svelte:head>

<div class="heading">
	<h1 class="title">Work</h1>
	<p class="subtitle">An overview of my rather serious work.</p>
</div>

<h2 id="volunteering">Volunteering</h2>
<section>
	<p>
		I deeply care about making the world a better place. I care about <Link
			href="https://en.wikipedia.org/wiki/FLINTA*">FLINTA</Link
		>
		in science and tech, queer rights, accessibility, education for neglected minorities and basically
		all those other typical left values. I encorporate these things into my work and also do quite a
		bit of volunteering around them. The volunteering I do takes up a lot of time and I felt they deserved
		a place here. Currently I am an active member at the FLINTA Hackspace
		<Link href="https://heartofcode.org">Heart of Code</Link>. At
		<Link href="/aboutme#university">University</Link>
		I am also a student representative and basically build up our subjects student association from the
		ground up. I also take care of our finances. I try to make the bachelor more accessible to students
		who aren't rich and come with tons of prior knowledge. I care about fairness. I also advocate for
		others and the things I care about in many smaller ways that aren't easily trackable. Usually I am
		the first to say yes to work that needs to get done for causes that I support.

		<br /> <br />
		Things I organized/took part in: the under 18 program team of the
		<Link href="https://tincon.org">TINCON</Link> (a conference for digital youth culture), a day long
		<Link href="https://github.com/StrangeGirlMurph/Coding-Seminar"
			>intro to programming workshop</Link
		>, a talk on FLINTA in science for a FLINTA meetup at my university, multiple about 4h long
		workshops/presentations on transidentity and queerness, the two part Server Charm workshop (see
		below), hosting many smaller meetings at Heart of Code and other things I currently can't
		remember (will add them incrementally).
	</p>
</section>

<h2 id="server-charms">Server Charms</h2>
<section>
	<p>
		A beginner-friendly manual for a Server Charm. A portable device that creates its own Wi-Fi
		network and hosts a website for curious people around you! An everyday companion/portable
		easteregg. The manual is quite extensive with a big glossary. It also covers fun mods for the
		Basic Server Charm. It's meant to be a fun maker project for beginners and experienced people.
		The product is also just really cool. Based on the manual I organized a workshop in a local <Link
			href="https://en.wikipedia.org/wiki/FLINTA*">FLINTA</Link
		> hackspace in Berlin.
	</p>
	<Links
		links={[
			{
				name: `Server-Charms | Repository`,
				type: `codeberg`,
				href: `https://codeberg.org/StrangeGirlMurph/Server-Charms`
			},
			{
				name: `Manual`,
				type: `pdf`,
				href: `https://codeberg.org/StrangeGirlMurph/Server-Charms/raw/branch/main/Manual.pdf`
			}
		]}
	/>
</section>

<h2 id="wikipedia-helper">Obsidian Wikipedia Helper Plugin</h2>
<section>
	<p>
		A plugin for the note taking app <Link href="https://obsidian.md/">Obsidian</Link> that uses the
		<Link href="https://wikipedia.org">Wikipedia</Link>
		API to let the user search, link, insert and open Wikipedia/Wikimedia articles directly in their
		notes from within the app. I built it because I was looking for that functionality myself when writing
		about scientific stuff. It just makes it so much more convenient to gather knowledge. The plugin
		is available in the community plugin list and has in total {data['downloads'] ?? 'over 20000'} downloads.
		It's my first project where I get to handle bug and feature reports and fix/implement them. It's
		a lot of fun and I take pride in having fixed basically all bug reports I got in under 24h :)
	</p>
	<Links
		links={[
			{
				name: `obsidian-wikipedia-helper | Repository`,
				type: `github`,
				href: `https://github.com/StrangeGirlMurph/obsidian-wikipedia-helper`
			},
			{
				name: `Wikipedia Helper Documentation | Website`,
				type: `link`,
				href: `https://wikipedia-helper.murphy.science/`
			}
		]}
	/>
</section>

<h2 id="humane-software-license">The Humane Software License</h2>
<section>
	<p>
		A software license to change the world! All the code I write and publish is in some way or
		another there to save the world. I was looking for a software license that encapsulates this
		passion and ease my fear of people abusing my work for their malicious purposes but could only
		really find the <Link href="https://anticapitalist.software/"
			>Anti-Capitalist Software License</Link
		> and so ended up creating my own license instead. From the projects README: "The HSL is meant to
		accompany software that empowers individuals, collectives, worker-owned cooperatives, and nonprofits
		who follow the UN Universal Declaration of Human Rights, while denying usage to those that exploit
		labor for profit and don't care about the moral consequences of their actions." Nearly all my projects
		are now licensed under the HSL. It is definitely not perfect and should mostly be seen as a deterrend
		but I can recommend it nonetheless for hobby projects.
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

<h2 id="fractals">Introduction to Fractals and Holomorphic Dynamics</h2>
<section>
	<p>
		An article I wrote for my university course "Scientific Computing in Mathematica". It is an
		introduction into fractal geometry and holomorphic dynamics being the mathematical foundation
		for some of the most well known fractals which I also cover. I created all the visuals myself in
		Mathematica 13. You can run and edit them yourself by downloading the source code from below. I
		wrote it in my second semester but to read and understand it you barely need to know any
		mathematical notation to follow along. It's highly influenced by <Link
			href="https://www.youtube.com/@3blue1brown">3Blue1Browns</Link
		> incredible videos on the topic! My personal highlight of the article is the section covering and
		showing the bifurcation diagram of the logistic map hiding in the Mandelbrot set plotted in three
		dimensions. The bifurcation diagram of the logistic map definitely was one of my special interests.
		Don't worry these terms don't have to mean anything to you right now. Just start reading and dive
		into the wonderful, beautiful, fascinating and weird world of fractal geometry!
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

<h2 id="facial-landmark-detection">Facial Landmark Detection</h2>
<section>
	<p>
		A project on facial landmark detection on facecam input I did for my university course "Deep
		Learning". Even though the article was written together with two others I did all the coding. I
		used <Link href="https://www.tensorflow.org/">TensorFlow</Link> and a
		<Link href="https://en.wikipedia.org/wiki/Convolutional_neural_network"
			>convolutional neural network</Link
		>
		with a dataset from <Link href="https://www.kaggle.com/">Kaggle</Link>. The project was my first
		experience with the development of real world machine learning applications. I had fun
		optimizing some custom masked loss functions but by far the biggest and most time consuming part
		was dealing with the data and building the infrastructure around video inputs and so on.
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

<h2 id="jambo">Jambo</h2>
<section>
	<p>
		A Discord bot to manage a whole game jam/hackathon server from a fully functional poll system to
		managing color roles. I am the owner of a Discord server called Cowoding Jams where we host
		monthly coding jams/hackathons. Because organizing them with collecting all the proposals and
		creating polls with external tools was way too much work we went the "programmer way" and spent
		nearly a year developing our own Discord bot as a group project to handle all those things for
		us :) We are about 7 active developers. We are more people on the server though. Check out the <Link
			href="https://github.com/Cowoding-Jams/Jambo/wiki">wiki</Link
		> to learn more about its features and create your own server with it!
	</p>
	<Links
		links={[
			{ name: `Jambo | Repository`, type: `github`, href: `https://github.com/Cowoding-Jams/Jambo` }
		]}
	/>
</section>

<h2 id="holeebike">HoleeBike</h2>
<section>
	<p>
		A <Link href="https://flutter.dev/">Flutter</Link> app I developed as part of my school graduation
		in 12th class. In Berlin we have this thing called "5. Prüfungskomponente" which is part of our A
		levels where you can either write a paper or have a presentation. I did a presentation in Geography
		with Computer Science as the secondary subject. After other project ideas like automatically orientating
		solar panel mounts and similar I came up with the idea to use phone sensors to detect bumps/potholes/damages/etc
		on cycleways to allow for more direct maintenance also based on usage statistics. With the project
		I completely overdid it. Together with a schoolmate I then build a working prototype of the app we
		called HoleeBike. I taught myself how to use Flutter, Firebase and also learned how to use Git and
		GitHub in that time. That project was the first time I worked on a big software project. I basically
		spend all my free time working on it. I implemented everything from the algorithms that read and
		process the acceleration data to the cloud backend. With my prototype I could show that the concept
		worked. We also reached out to people from our local administration to see if they would be interested
		in these kind of data. It felt like they didn't take us seriously enough to make something from it.
		After school I dove right into uni and didn't continue working on it. I've been meaning to open source
		the idea and prototype but that requires cleanup and so on... In the end I got the best possible
		grade for my presentation and work. I am really happy with the project and all I could learn from
		it. The presentation itself turned out to be rather heartbreaking though because I had to condense
		all this work I've put in over months into a 20min presentation. The project just outgrew the school
		work. I dug out the files for presentation in case you're interested in the specifics. Note that
		it is all in german!
	</p>
	<Links
		links={[
			{
				name: `Präsentation | (.pptx) (about 1.2GB)`,
				type: `file`,
				href: `/work/5.PK Präsentation.pptx`
			},
			{
				name: `Präsentation | (.mp4)`,
				type: `file`,
				href: `/work/5.PK Präsentation.mp4`
			},
			{
				name: `Präsentation | (.pdf missing videos and animations)`,
				type: `pdf`,
				href: `/work/5.PK Präsentation.pdf`
			},
			{
				name: `Fließtext zur Präsentation | (.pdf)`,
				type: `pdf`,
				href: `/work/5.PK Fließtext.pdf`
			}
		]}
	/>
</section>
