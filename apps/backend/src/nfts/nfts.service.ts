import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftDto } from './dto/update-nft.dto';
import { Nft } from './entities/nft.entity';

@Injectable()
export class NftsService {
  constructor(@InjectRepository(Nft) private nftRepository: Repository<Nft>, private connection: Connection) { }
  create(createNftDto: CreateNftDto) {
    return this.nftRepository.create(createNftDto);
  }

  createSome(createNftDtos: Array<CreateNftDto>) {
    return this.nftRepository.save(createNftDtos, {
      transaction: true
    })
  }

  findAll(filters: Partial<Nft> = {}) {
    return this.nftRepository.find(filters);
  }

  findOne(id: string) {
    return this.nftRepository.findOne(id);
  }

  update(id: string, updateNftDto: UpdateNftDto) {
    return this.nftRepository.update({ id }, updateNftDto);
  }

}
