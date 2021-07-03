<script>
	import Random from './index.svelte';

  import locations from '$lib/js/stores/random/locations';
</script>

<Random color="text-green-400" array={locations.locations} />
