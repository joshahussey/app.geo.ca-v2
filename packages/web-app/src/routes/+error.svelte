<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import Feedback from '$lib/components/feedback/feedback.svelte';
</script>

<Header />
<div class="flex flex-col content-width space-y-4 bg-custom-1 min-h-screen pt-24">
	<div class="grow">
		{#if $page.data.lang == 'en-ca'}
			Oops... There was an error. Feel free to report it by sending us an email to
			<a class="underline" href="mailto:geo@nrcan-rncan.gc.ca">geo@nrcan-rncan.gc.ca</a>
			.
		{:else}
			Oups... Une erreur s'est produite. N'hésitez pas à le signaler en nous envoyant un email à
			<a class="underline" href="mailto:geo@nrcan-rncan.gc.ca">geo@nrcan-rncan.gc.ca</a>
			.
		{/if}
	</div>
	<Feedback />
</div>
<Footer />
