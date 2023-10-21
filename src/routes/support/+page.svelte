<script>
	import GitHub from 'svelte-material-icons/Github.svelte';
</script>

<svelte:head>
	<title>Support Me | Murphy</title>
	<meta name="description" content="Overview of my work." />
</svelte:head>

<div class="heading">
	<h1 class="title md:before:content-['🍀_'] md:after:content-['_💕']">Support Me</h1>
	<h2 class="subtitle">Possibilities to support me and my work financially!</h2>
</div>

<p>
	You're probably here because you enjoy something I created. Happy you like it! If you want: GitHub
	Sponsors, Ko-fi and PayPal give you the option to support my work financially and make my day with
	it. In general I mostly only need the support for my projects to pay for databases, domains and
	some services. I currently have enough to live. Either way have a wonderful day 🐸✨💚
</p>

<div class="flex flex-row flex-wrap items-center justify-center my-10 gap-8">
	<a href="https://github.com/sponsors/StrangeGirlMurph" title="GitHub">
		GitHub
		<GitHub class="w-8 h-8 text-black" />
	</a>
	<a href="https://ko-fi.com/murph" title="Ko-fi">
		Ko-fi
		<img
			src="https://storage.ko-fi.com/cdn/nav-logo-stroke.png"
			alt="ko-fi logo"
			class="w-8 h-8 object-contain"
		/>
	</a>
	<a href="https://paypal.me/strangemurph" title="PayPal">
		PayPal
		<img
			src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
			alt="paypal logo"
			class="w-8 h-8"
		/>
	</a>
</div>

<style>
	a {
		@apply text-[1.3rem] font-semibold flex items-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-tl from-[#ff4ea4] to-[#ff5f5c];
	}
</style>
