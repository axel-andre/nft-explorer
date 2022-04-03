import { Command, Positional } from 'nestjs-command';
import { Injectable, Logger } from '@nestjs/common';
import { NftsService } from 'src/nfts/nfts.service';
import { nftSeedData } from './data';

@Injectable()
export class NftSeedService {
    constructor(
        private readonly userService: NftsService,
    ) { }

    @Command({ command: 'seed:nfts', describe: 'create some nfts' })
    async create() {
        try {

            await this.userService.createSome(nftSeedData);
            Logger.log('Seed done successfully !', 'NFTs')
        } catch (err) {
            Logger.error(err);
            Logger.error('failed seed', 'NFTs')
        }
    }
}