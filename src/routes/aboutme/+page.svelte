<script lang="ts">
	import Links from '../../components/Links.svelte';
	$: age = (Date.now() - new Date('2003-05-26').getTime()) / 31536000000;

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
			{ name: 'Supabase', icon: 'supabase/supabase-original' },
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
</svelte:head>

<div class="heading">
	<h1 class="title">About Me</h1>
	<h2 class="subtitle">Learn a bit about me as a person.</h2>
</div>

<h1>Who am I?</h1>
<section>
	<div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
		<p>
			In a nutshell I am a young, left and queer girl called Murphy. I am roughly {age.toFixed(4)}
			years old. I go by she/her pronouns but they/them pronouns are also fine. I live in a great city
			somewhere on planet Earth (hint: UTC+2). I love to learn and some of my greatest strengths are
			my ability to be very disciplined when I need and want to be, my empathy, my pride and my incredible
			motivation to save this world. In May 2020 I built my first computer (named
			<a href="https://interstellarfilm.fandom.com/wiki/TARS" class="link">TARS</a>). Since then my
			knowledge has basically increased exponentially and I learned a ton about science and
			specifically computer science and just never stopped. My true passion is physics. I had an
			amazing physics teacher in school and learned so much from him. There is too much pain and
			suffering in the world though for me to just follow my passion and learn about some particles
			which are so small that no one will ever be able to see them. That's why I am dedicating a lot
			of my attention towards computer science instead. I can do a lot more relevant for the world
			with software then I could with studying quantum mechanics. And I think AI has an incredible
			potential to boost all kinds of scientific research. I mean just look at what
			<a href="https://www.deepmind.com/" class="link">DeepMind</a>
			is already achieving with
			<a class="link" href="https://www.deepmind.com/research/highlighted-research/alphafold"
				>AlphaFold</a
			>
			for example. Now back to the important things though: I LOVE How I Met Your Mother 😊. For me it's
			the single greatest piece of art ever created! You should watch it if you haven't already!
			<br />
			Oh and I like <a href="/cats" class="hover:underline hover:text-green">cats</a> :)
		</p>
		<img class="rounded-full w-[340px] mb-8 shadow-lg" src="/profile.png" alt="profile" />
	</div>
</section>

<h1>What am I doing with my life?</h1>
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

<h1>Skills</h1>
<section>
	<p>
		Over the years I used and explored a bunch of languages/operating systems/tools/libraries/etc. I
		roughly categorized them and tried to sort them by type. This is a only a portion of them
		though. They are limited by the icons I found on <a href="https://devicon.dev/" class="link"
			>Devicon</a
		> 🙃
	</p>
	{#each ['I am good with', 'I am okay with', 'I came in contact with'] as title, index}
		<h2 class="mt-4">{title}</h2>
		<div class="flex flex-row flex-wrap gap-4 justify-center my-5">
			{#each skills[index] as skill}
				<img
					src="{deviconCDN}{skill.icon}.svg"
					class="w-11 inline-block drop-shadow-sm dark:drop-shadow-[0px_0px_0.8px_rgba(180,180,180,0.6)]"
					title={skill.name}
					alt={skill.name}
				/>
			{/each}
		</div>
	{/each}
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
