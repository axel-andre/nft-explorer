import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { NftsModule } from 'src/nfts/nfts.module';
import { NftSeedService } from './nft-seed/nft-seed.service';

@Module({
  imports: [CommandModule, NftsModule],
  providers: [NftSeedService]
})
export class SeedModule {}
