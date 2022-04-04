import axios from "axios";
import NFTRepository from "./nft";
import { browser } from "$app/env";
let API_URL = '/api'

if (!browser) {
    API_URL = 'http://localhost:3000/' 
}
const baseAxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true
});
export class API {
    static axiosInstance = baseAxiosInstance;
    static NFT = new NFTRepository(this.axiosInstance);
}