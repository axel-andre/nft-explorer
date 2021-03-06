import type { AxiosError, AxiosInstance } from "axios";
import { Axios } from "axios";
import { endpoints } from "./constants";

interface NFT {
    author: string;
    image: string;
    token: string;
    description: string;
}

export default class NFTRepository {
    constructor(private axiosInstance: AxiosInstance) { }

    public async getAll(filters?: Partial<NFT>) {
        try {

            const { data } = await this.axiosInstance.get(endpoints.BASE);
            return data;
        } catch (err) {
            console.log(err as AxiosError);
        }

    }
}