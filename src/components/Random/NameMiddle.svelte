<script>
	import Random from './index.svelte';

  import { middle } from '$lib/js/stores/random/names';
</script>

<Random color="text-red-400" array={middle} option="male" />
