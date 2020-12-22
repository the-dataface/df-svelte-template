<script>
  import { onMount } from "svelte";
  import Icon from "../helpers/Icon.svelte";
  import markup from "../../assets/copy/markup.json";
</script>

<style>
  section {
    padding: 1rem;
  }

  div {
    margin-bottom: 2rem;
  }
</style>

<section>
  <div>
    <h1>{markup.headline}</h1>
  </div>

  <div>
    <p>
      Hello svelter! Here is an inline svg icon:
      <Icon name="feather" strokeWidth="1" stroke="orange" />
    </p>

    {#each markup.lead as { value }}
      <p>{value}</p>
    {/each}
  </div>
</section>
