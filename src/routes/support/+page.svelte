<script>
	import GitHub from '../../components/icons/GitHub.svelte';
</script>

<svelte:head>
	<title>Support Me | Murphy</title>
	<meta name="description" content="Support my work financially." />
</svelte:head>

<div class="heading">
	<h1>Support Me</h1>
	<p class="subtitle">Possibilities to support me and my work financially!</p>
</div>

<section>
	<p>
		You're probably here because you enjoy something I created. Happy you like it! If you want: <a
			href="https://github.com/sponsors/StrangeGirlMurph"
			class="link">GitHub Sponsors <GitHub className="w-6 h-6 text" /></a
		>,
		<a href="https://ko-fi.com/murph" class="link"
			>Ko-fi <img
				src="https://storage.ko-fi.com/cdn/nav-logo-stroke.png"
				alt=""
				class="w-6 h-6 object-contain"
			/></a
		>
		and

		<a href="https://paypal.me/strangemurph" class="link"
			>PayPal <img
				src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
				alt=""
				class="w-5 h-5"
			/></a
		> give you the opportunity to support my work financially and make my day with it. I don't have any
		major expenses yet and currently have enough to live so for now you would only really support my
		cake consumption &gt;:) Either way have a wonderful day! &lt;3
	</p>
</section>

<style>
	a {
		@apply inline-flex items-center gap-1;
	}
</style>
