<script>
  import Meta from "./Meta.svelte";
  import Example from "./blocks/Example.svelte";
  import Header from "./blocks/Header.svelte";
  import Footer from "./blocks/Footer.svelte";
</script>

<Meta />

<Header />

<Example />

<Footer />

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

  .skip-to-main {
    border: none;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
  }

  .skip-to-main:focus {
    width: auto;
    height: auto;
    padding: 0.5em;
    z-index: 1000;
  }
</style>
