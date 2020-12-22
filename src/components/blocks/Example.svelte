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
      <!-- icon from tabler (see styling in global.css -->
      <!-- {@html moodSmile} -->
      <Icon name="feather" />
    </p>
  </div>
</section>
