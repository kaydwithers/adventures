<script>
	import Random from './index.svelte';

  import { last } from '$lib/js/stores/random/names';
</script>

<Random color="text-red-400" array={last} option="male" />
