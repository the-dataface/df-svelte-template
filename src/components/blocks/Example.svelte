<script>
  import { onMount } from "svelte";
  import Icon from "../helpers/Icon.svelte";
  import markup from "../../assets/copy/markup.json";
</script>

<section class="mw-640">
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

<style type="text/scss">
  // import our mixins or specific helper sass files like "df-flex"
  @import "../../styles/_helpers.scss";
  @import "../../styles/_breakpoints.scss";
  @import "../../styles/df-flex.scss";

  section {
    padding: 1rem;
    width: 100%;
    margin: auto;

    // use our sass helper for $mobile or $tablet breakpoints
    // @include respond-to($tablet) {
    // }
    div {
      margin-bottom: 2rem;
    }

    h1 {
      // use variables from public/assets/styles/globals.css
      color: var(--purple);
    }
  }
</style>
