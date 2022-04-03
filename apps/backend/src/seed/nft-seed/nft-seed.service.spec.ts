import { Test, TestingModule } from '@nestjs/testing';
import { NftSeedService } from './nft-seed.service';

describe('NftSeedService', () => {
  let service: NftSeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NftSeedService],
    }).compile();

    service = module.get<NftSeedService>(NftSeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
