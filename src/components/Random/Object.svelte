<script>
	import Random from './index.svelte';

  import objects from '$lib/js/stores/random/objects';
</script>

<Random color="text-green-400" array={objects.objects} />
