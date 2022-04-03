import axios from "axios";
import NFTRepository from "./nft";
import { browser } from "$app/env";
let API_URL = '/api'

if (!browser) {
    API_URL = process.env.API_URL
}
const baseAxiosInstance = axios.create({
    baseURL: API_URL
})
console.dir(API_URL);
export class API {
    static axiosInstance = baseAxiosInstance;
    static NFT = new NFTRepository(this.axiosInstance);
}