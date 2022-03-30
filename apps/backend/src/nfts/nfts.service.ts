import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftDto } from './dto/update-nft.dto';
import { Nft } from './entities/nft.entity';

@Injectable()
export class NftsService {
  constructor(@InjectRepository(Nft) private nftRepository: Repository<Nft>){}
  create(createNftDto: CreateNftDto) {
    return 'This action adds a new nft';
  }

  findAll(filters: Partial<Nft> = {}) {
    return this.nftRepository.find(filters);
  }

  findOne(id: number) {
    return `This action returns a #${id} nft`;
  }

  update(id: number, updateNftDto: UpdateNftDto) {
    return `This action updates a #${id} nft`;
  }

}
