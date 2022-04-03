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
  /*       const { status, statusText, data } = await this.axiosInstance.get<NFT[]>(endpoints.BASE, {
            data: filters
        });
        
        return {
            status,
            statusText,
            data:  [
                {
                    author: 'string',
                    image: 'string',
                    token: 'string',
                    description: 'string'
                }
            ]
        } */
        return [
            {
                author: 'string',
                image: 'string',
                token: 'string',
                description: 'string'
            },
        ]
    }
}