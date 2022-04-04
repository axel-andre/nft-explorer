<script context="module" lang="ts">
	import api from '$lib/api';

	import type { Load } from '@sveltejs/kit';
	export const load: Load = async () => {
		const nfts = await api.NFT.getAll();
		return {
			props: {
				nfts
			}
		};
	};
	export const hydrate = false;
</script>

<script>
	import NftCard from '$lib/components/NftCard.svelte';

	export let nfts = [];
	$: console.log(nfts);
</script>

<h1>Discover</h1>
<div class="nft-container">
	{#each nfts as nft}
		<NftCard {...nft} />
	{/each}

	{#each nfts as nft}
		<NftCard {...nft} />
	{/each}
</div>
<div class="disclamer">All those pictures are from : <a href="https://picsum.photos/">https://picsum.photos/</a> (so not real NFTs)</div>
<style>
    .nft-container{
        display: flex;
        row-gap: 2rem;
        column-gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 4rem;
    }
    h1 {
        max-width: 1100px;
        margin: 2rem auto;
    }
    .disclamer{
        margin-top: 2rem;
        text-align: center;
        opacity: 0.75;
    }
</style>
