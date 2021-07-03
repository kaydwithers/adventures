<script>
	import Random from './index.svelte';

  import titles from '$lib/js/stores/random/titles';
</script>

<Random color="text-red-400" array={titles.titles} option="male" />
