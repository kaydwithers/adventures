<script>
	import Random from './index.svelte';

  import animals from '$lib/js/stores/random/animals';
</script>

<Random color="text-green-400" array={animals.animals} />
