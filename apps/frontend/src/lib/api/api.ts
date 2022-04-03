import axios from "axios";
import NFTRepository from "./nft";

const baseAxiosInstance = axios.create({
    baseURL: 'localhost:3000/nft/'
})

export class API {
    static axiosInstance = baseAxiosInstance;
    static NFT = new NFTRepository(this.axiosInstance);
}