<script>
  import { onMount } from "svelte";
  import Meta from "./Meta.svelte";
  import Example from "./blocks/Example.svelte";
  import Header from "./blocks/Header.svelte";
  import Footer from "./blocks/Footer.svelte";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <Meta />

  <Header />

  <p>Mounted = {mounted}</p>

  <Example />

  <Footer />
{/if}

<style global lang="postcss">
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;

  @layer base {
    /* h1 {
      @apply text-3xl;
      @apply font-bold;
    }

    h2 {
      @apply text-2xl;
    }

    h3 {
      @apply text-xl;
    }

    h4 {
      @apply text-lg;
      @apply font-bold;
    }

    h5 {
      @apply text-base;
      @apply font-bold;
    } */
  }
</style>
