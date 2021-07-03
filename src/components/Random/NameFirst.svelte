<script>
	import Random from './index.svelte';

  import { first } from '$lib/js/stores/random/names';
</script>

<Random color="text-red-400" array={first} option="male" />
