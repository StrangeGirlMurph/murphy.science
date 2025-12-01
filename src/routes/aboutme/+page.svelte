<script lang="ts">
	import Links from '../../components/Links.svelte';
	export let data: { birthday: string };

	const deviconCDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

	let skills: { name: string; icon: string }[][] = [
		[
			{ name: 'Linux', icon: 'linux/linux-original' },
			{ name: 'Visual Studio Code', icon: 'vscode/vscode-original' },
			{ name: 'Typescript', icon: 'typescript/typescript-original' },
			{ name: 'Javascript', icon: 'javascript/javascript-original' },
			{ name: 'Python', icon: 'python/python-original' },
			{ name: 'Markdown', icon: 'markdown/markdown-original' },
			{ name: 'Svelte', icon: 'svelte/svelte-original' },
			{ name: 'HTML', icon: 'html5/html5-original' },
			{ name: 'CSS', icon: 'css3/css3-original' },
			{ name: 'Tailwindcss', icon: 'tailwindcss/tailwindcss-original' },
			{ name: 'GitHub', icon: 'github/github-original' },
			{ name: 'LaTeX', icon: 'latex/latex-original' },
			{ name: 'Moodle', icon: 'moodle/moodle-original' },
			{ name: 'Notion', icon: 'notion/notion-original' },
			{ name: 'Discord.js', icon: 'discordjs/discordjs-original' }
		],
		[
			{ name: 'Arch Linux', icon: 'archlinux/archlinux-original' },
			{ name: 'NixOS', icon: 'nixos/nixos-original' },
			{ name: 'Windows 11', icon: 'windows11/windows11-original' },
			{ name: 'RaspberryPi', icon: 'raspberrypi/raspberrypi-original' },
			{ name: 'Arduino', icon: 'arduino/arduino-original' },
			{ name: 'Vim', icon: 'vim/vim-original' },
			{ name: 'Jetbrains', icon: 'jetbrains/jetbrains-original' },
			{ name: 'Jupyter', icon: 'jupyter/jupyter-original' },
			{ name: 'Git', icon: 'git/git-original' },
			{ name: 'GitHub Actions', icon: 'githubactions/githubactions-original' },
			{ name: 'GitLab', icon: 'gitlab/gitlab-original' },
			{ name: 'Deno', icon: 'denojs/denojs-original' },
			{ name: 'Node.js', icon: 'nodejs/nodejs-original' },
			{ name: 'NPM', icon: 'npm/npm-original-wordmark' },
			{ name: 'Docker', icon: 'docker/docker-original' },
			{ name: 'Bash', icon: 'bash/bash-original' },
			{ name: 'Rust', icon: 'rust/rust-original' },
			{ name: 'C', icon: 'c/c-original' },
			{ name: 'C++', icon: 'cplusplus/cplusplus-original' },
			{ name: 'C#', icon: 'csharp/csharp-original' },
			{ name: 'Java', icon: 'java/java-original' },
			{ name: 'Go', icon: 'go/go-original' },
			{ name: 'Dart', icon: 'dart/dart-original' },
			{ name: 'Flutter', icon: 'flutter/flutter-original' },
			{ name: 'Keras', icon: 'keras/keras-original' },
			{ name: 'TensorFlow', icon: 'tensorflow/tensorflow-original' },
			{ name: 'Numpy', icon: 'numpy/numpy-original' },
			{ name: 'Pandas', icon: 'pandas/pandas-original' },
			{ name: 'Matplotlib', icon: 'matplotlib/matplotlib-original' },
			{ name: 'Matlab', icon: 'matlab/matlab-original' },
			{ name: 'opencv', icon: 'opencv/opencv-original' },
			{ name: 'Processing', icon: 'processing/processing-original' },
			{ name: 'P5.js', icon: 'p5js/p5js-original' },
			{ name: 'Unity', icon: 'unity/unity-original' },
			{ name: 'Google Cloud', icon: 'googlecloud/googlecloud-original' },
			{ name: 'Firebase', icon: 'firebase/firebase-plain' },
			{ name: 'SQLite', icon: 'sqlite/sqlite-original' },
			{ name: 'Vercel', icon: 'vercel/vercel-original' },
			{ name: 'Gimp', icon: 'gimp/gimp-original' }
		],
		[
			{ name: 'Zig', icon: 'zig/zig-original' },
			{ name: 'Visual Studio', icon: 'visualstudio/visualstudio-plain' },
			{ name: 'Android Studio', icon: 'androidstudio/androidstudio-original' },
			{ name: 'xcode', icon: 'xcode/xcode-original' },
			{ name: 'React', icon: 'react/react-original' },
			{ name: 'Next.js', icon: 'nextjs/nextjs-original' },
			{ name: 'Vue.js', icon: 'vuejs/vuejs-original' },
			{ name: 'Nuxt.js', icon: 'nuxtjs/nuxtjs-original' },
			{ name: 'Vite.js', icon: 'vitejs/vitejs-original' },
			{ name: 'Kaggle', icon: 'kaggle/kaggle-original' },
			{ name: 'Godot', icon: 'godot/godot-original' },
			{ name: 'IFTTT', icon: 'ifttt/ifttt-original' },
			{ name: 'Figma', icon: 'figma/figma-original' },
			{ name: 'Blender', icon: 'blender/blender-original' }
		]
	];
</script>

<svelte:head>
	<title>About Me | Murphy</title>
	<meta name="description" content="A little bit about me as a person." />
	<!-- Preload LCP image -->
	<link rel="preload" as="image" href="/profile-300.avif" type="image/avif" fetchpriority="high" />
	<link rel="preload" as="image" href="/profile-300.webp" type="image/webp" fetchpriority="high" />
</svelte:head>

<div class="heading">
	<h1 class="title">About Me</h1>
	<p class="subtitle">Learn a bit about me and my goals in life.</p>
</div>

<h2>Who am I?</h2>
<section>
	<div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
		<p>
			In a nutshell I am a young, left and queer girl called Murphy. I am about {data.birthday} old.
			I go by she pronouns. I live in a great city somewhere on planet Earth (hint: CET). I love to learn
			and some of my greatest strengths are my ability to be very disciplined when I need and want to
			be, my empathy, my autism and my incredible motivation to save this world. In May 2020 I built
			my first computer (named
			<a href="https://interstellarfilm.fandom.com/wiki/TARS" class="link">TARS</a>). Since then my
			knowledge has basically grown exponentially and I learned a ton about science and specifically
			computer science and just never stopped. My true passion is physics. I had an amazing physics
			teacher in school and learned so much from him. Sadly there is too much pain and suffering in
			the world for me to just follow my passion and spend all my time uncovering the secrets of the
			universe. That's why I am dedicating a lot of my attention towards computer science instead. I
			can do a lot more relevant for the world with software then I could with studying quantum
			mechanics. And I think AI has an incredible potential to boost all kinds of scientific
			research. Note: I am not talking about generative AI. That sentence was written before LLMs
			got here... I mean just look at what
			<a href="https://www.deepmind.com/" class="link">DeepMind</a>
			is achieving with
			<a class="link" href="https://www.deepmind.com/research/highlighted-research/alphafold"
				>AlphaFold</a
			>
			for example. Now back to the important things though: I LOVE How I Met Your Mother ☺️ For me it's
			the single greatest piece of art ever created! You should watch it if you haven't already! Oh and
			I like <a href="/cats" class="hover:underline hover:text-green">cats</a> :)
		</p>
		<picture class="block flex-shrink-0">
			<source srcset="/profile-300.avif" type="image/avif" />
			<source srcset="/profile-300.webp" type="image/webp" />
			<img
				class="rounded-full w-[300px] h-auto mb-8 shadow-lg"
				src="/profile.png"
				alt="My avatar - A digital illustration of a cute character floating peacefully with their eyes closed against a dark background. The character has short white hair with a small flower clip, and wears a blue cape over a beige tunic. They are surrounded by golden sparkles and two translucent, glowing blue manta rays."
				width="300"
				height="300"
				loading="eager"
				fetchpriority="high"
			/>
		</picture>
	</div>
</section>

<h2>What am I doing with my life?</h2>
<section>
	<p>
		I want to save the world and make it a better place. I want to fight the pain and suffering. I
		can't survive just watching humans suffer all over the world and not doing anything about it. I
		am way too empathetic for that. Their pain is my pain. I am good at and love science.
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

<h2>University</h2>
<section>
	<p>
		I am currently studying Computer Science, Mathematics & Physics at University. It's a
		challenging combination of all three disciplines. I am having the same courses as the regular
		math/physics/cs students. Just not all of them and my bachelor is longer. Before I started this
		bachelor I studied Computer Science & Computational Science somewhere else for a year. It
		allowed me to take courses on physics and cognitive neurosciences but it was just too applied
		and tbh too easy for me. Plus I wanted more and serious math. Not just math for computer
		science. I don't worry too much about my university grades. I don't want nor need the fanciest
		education and high paying jobs in the world. Neither do I want to work in the academic field. I
		want to solve real world problems not end up in fundamental research. I want to help people and
		save the world. That's why I decided I'd rather work on useful and impressive projects during my
		studies that directly benefit humanity than spend my time endlessly studying for exams and
		memorizing things I can always just look up later. A GitHub profile with useful code is more
		important to me than some number on a piece of paper. Nonetheless I do have quite good grades
		(especially in computer science) and also have a scholarship. And don't get me wrong! I am very
		ambitions when it comes to learning and actually understanding the concepts in my bachelor and
		working towards being able to use that knowledge whenever I need it.
	</p>
</section>

<h2>Skills</h2>
<section>
	<p>
		Over the years I used and explored a bunch of languages/operating systems/tools/libraries/etc. I
		roughly categorized them by how confident I am in using them and tried to sort them a bit by
		type in each category. This is just a small overview so you can get a sense of what I am working
		with. Not that this is a only a portion of them though. They are limited by the icons I found on <a
			href="https://devicon.dev/"
			class="link">Devicon</a
		> 🙃
	</p>
	{#each ['I am good with', 'I am okay with', 'I came in contact with'] as title, index}
		<h3 class="mt-4">{title}</h3>
		<div class="flex flex-row flex-wrap gap-4 justify-center my-5">
			{#each skills[index] as skill}
				<img
					src="{deviconCDN}{skill.icon}.svg"
					class="w-11 inline-block drop-shadow-sm dark:drop-shadow-[0px_0px_3px_rgba(255,255,255,0.6)]"
					title={skill.name}
					alt={skill.name}
					loading="lazy"
					width="44"
					height="44"
				/>
			{/each}
		</div>
	{/each}
</section>

<h2>Contact me</h2>
<section>
	<p>
		If you want to contact me, you can do so via email. If you wanna learn more about one of my
		projects, have some feedback or whatever it may be. I actually enjoy email and I am happy to
		hear from you :) You can also try some other ways like the discussions tab on my GitHub README
		Repo <a class="link" href="https://github.com/StrangeGirlMurph/StrangeGirlMurph/discussions"
			>here</a
		>. You'll find a way. When you do so please introduce yourself a bit that I roughly know who I
		am talking to and what the context is.
	</p>
	<Links
		links={[
			{
				href: `mailto:hello@murphy.science`,
				type: `mail`,
				name: `hello@murphy.science`
			}
		]}
	/>
</section>
