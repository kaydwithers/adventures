<script>
	import Random from './index.svelte';

  import phrases from '$lib/js/stores/random/phrases';

  export let type = null;
</script>

<Random color="text-blue-400" array={phrases.phrases} option={type} />
