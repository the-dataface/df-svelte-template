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
    h1 {
      @apply text-3xl;
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
    }
  }
</style>
