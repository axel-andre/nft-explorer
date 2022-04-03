import { Module } from '@nestjs/common';
import { NftsService } from './nfts.service';
import { NftsController } from './nfts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nft } from './entities/nft.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nft])],
  controllers: [NftsController],
  providers: [NftsService],
  exports: [NftsService]
})
export class NftsModule {}
