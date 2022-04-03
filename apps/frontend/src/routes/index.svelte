<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";
    import API from "$lib/api/index";
    
    
    export const load: Load = async ()=>{
        try {
           const nft = await API.NFT.getAll();
           console.log(nft);
           return {
               props: {
                   nft
               }
           }
        }catch(e){
            return{
                error: e
            }
        }
    }
</script>
<script>
    let API_URL = (import.meta.env)
    $: console.log(API_URL);
    export let nft;
</script>
<h1>Welcome to {nft[0].author}</h1>
{API_URL}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
