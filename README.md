# DF Svelte Template

Adapted from The Pudding's [starter template](https://github.com/the-pudding/svelte-starter).

#### Features

<!-- - [HMR](https://github.com/rixo/svelte-hmr) for lightning fast development -->

- [Feather Icons](https://github.com/feathericons/feather) for simple/easy svg icons
- [ArchieML](http://archieml.org/) for micro-CMS powered by Google Docs
<!-- - [LayerCake](https://layercake.graphics/) enabled by default for chart -->
- [Water.css](https://github.com/kognise/water.css) for default styling
- Includes csv, json, and svg imports by default
- Configured to make easy deployment to Github Pages

## Quickstart

<!-- New school: just click the `Use this template` button above.

Old school:

```bash
# npx degit the-pudding/svelte-starter my-project
``` -->

Clone and run:

```bash
npm install
npm run build
```

## Development

To start the dev server:

```bash
npm run dev
```

Modify content in `src` and `public/assets`.

## Deploy

If deploying to github pages, set up GH pages to run from the main branch on `/docs` and then:

```bash
make github
```

## Style

There are a few stylesheets included by default in `template.html`. Modify `global.css` variables to make changes to Water.css defaults.

You can use scss in your svelte files.

```bash
<style type="text/scss">
// import our mixins or specific helper files like "df-flex" like this
  @import "../../styles/_helpers.scss";
  @import "../../styles/_breakpoints.scss";
  @import "../../styles/df-flex.scss";

  // use our sass helper for $mobile or $tablet breakpoints
  @include respond-to($mobile) {

  }

// use global variables like this
color: var(--purple);
</style>
```

#### Fonts

Add google fonts and weights by editing `config.json` and then rerunning `npm run build` and `npm run dev`.

You can also activate Font Awesome and Typekit kits by adding the kit ID and turning active to `true` in `config.json`.

## Google Docs

- Create a Google Doc
- Click `Share` button -> advanced -> Change... -> to "Anyone with this link"
- In the address bar, grab the ID - eg. ...com/document/d/**1IiA5a5iCjbjOYvZVgPcjGzMy5PyfCzpPF-LnQdCdFI0**/edit
- paste in the ID above into `config.json`

Running `npm run fetch:doc` at any point (even in new tab while server is running) will pull down the latest, and output a file to `src/assets/copy/markup.json` (or customize in the config file).

## Google Sheets

- Create a Google Sheet
- Click `Share` button -> advanced -> Change... -> to "Anyone with this link"
- In the address bar, grab the ID - eg. ...com/document/d/**1IiA5a5iCjbjOYvZVgPcjGzMy5PyfCzpPF-LnQdCdFI0**/edit
- paste in the ID above into `config.json`

Running `npm run fetch:sheet` at any point (even in new tab while server is running) will pull down the latest, and output a file to `src/data/sheet.json` (or customize in the config file).

## Notes

Any @html tags, e.g., `{@html user}` must be the child of a dom element so they can be properly hydrated.

## To do

- [x] SCSS
- [x] Add in basic DF css and clean up globals for water
- [x] Google Fonts script
- [x] Makefile
