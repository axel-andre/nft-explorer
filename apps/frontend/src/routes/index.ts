import api from "$lib/api";
import type { RequestHandler } from "@sveltejs/kit";
export const get: RequestHandler = async () => {
    const nfts = await api.NFT.getAll();
    return {
        body:{
            nfts
        }
    }
}