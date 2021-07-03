<script>
  import { generator } from "$lib/js/generators/name";

  export let array = null;
  export let color = null;
  export let option = null;
</script>

<span class="{color}">{generator.randomValue(array, option = null)}</span>
