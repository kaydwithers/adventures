<script>
  import { generator } from "$lib/js/generators/name";
  import { onMount } from "svelte";

	import Animal from '../../Random/Animal.svelte';
  import Button from '../../Button/index.svelte';
	import Location from '../../Random/Location.svelte';
	import NameFirst from '../../Random/NameFirst.svelte';
	import NameMiddle from '../../Random/NameMiddle.svelte';
	import NameLast from '../../Random/NameLast.svelte';
	import Phrase from '../../Random/Phrase.svelte';
	import Object from '../../Random/Object.svelte';
  import Title from '../../Random/Title.svelte';
  // import New from '../../Character/New/index.svelte';
	// import Random from '../../Character/Random/index.svelte';

  let gender = null;

  onMount(() => {
    gender = generator.randomGender();
  })
</script>

<!-- <New />
<Random /> -->

<div class="mb-8">
  <p>Greetings <Title /> <NameFirst /> <NameMiddle /> <NameLast /> of <Location /></p>
  <p>You lost a bet to a <Animal /></p>
  <p>Your best friend is <Phrase type="noun" /> <Object /></p>
</div>

<Button>Random</Button>
