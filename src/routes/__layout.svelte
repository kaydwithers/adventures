<script>
	import '../tailwind.css';

	import Footer from '$lib/Footer/index.svelte';
</script>

<div class="bg-black flex h-screen items-center justify-center w-screen">
	<main class="text-white">
		<slot />
	</main>

	<Footer />
</div>
