<script lang="ts">
  import { page } from '$app/stores';
  import SearchResults from '$lib/components/search-results/search-results.svelte';

  let results = $derived($page.data.results ? $page.data.results : []);

  const lang = $page.data.lang;
	const title = lang == 'fr-ca' ? 'app.geo.ca - Résultats de recherche' : 'app.geo.ca - Search Results';

	const canonicalUrl = $page.data.canonicalUrl;
	const alternateUrl = $page.data.alternateUrl;
	const alternateLang = $page.data.alternateLang;
  const metaDescription = $page.data.metaDescription;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={metaDescription} />
  <link rel="canonical" href={canonicalUrl} />
  <link rel="alternate" hreflang="{alternateLang}" href="{alternateUrl}" />
  <script src="https://canadian-geospatial-platform.github.io/geoview/public/cgpv-main.js"></script>
  <!-- TODO: switch back to old link after geoview pull request with modifyDragged event accepted -->
  <!-- <script src="https://lbercovitch.github.io/geoview-leah/cgpv-main.js"></script> -->
  <!--<script src="https://canadian-geospatial-platform.github.io/geoview/public/cgpv-main.js"></script>-->
</svelte:head>

<div class="flex flex-wrap lg:flex-nowrap items-start gap-4 py-4">
  <div class="grow flex flex-col gap-4">
    <SearchResults />
  </div>
</div>
