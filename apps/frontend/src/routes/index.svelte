<script context="module" lang="ts">
import api from '$lib/api';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ()=>{
        const nfts = await api.NFT.getAll()
        return {
            props: {
                nfts
            }
        }
    };
</script>

<script>
	let API_URL = process.env;
	$: console.log(API_URL.API_URL);
	export let nfts = [];
	console.log(nfts);
</script>

{nfts[0]}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
