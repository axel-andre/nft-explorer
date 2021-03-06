import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NftsModule } from './nfts/nfts.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [NftsModule, TypeOrmModule.forRoot({
    url: process.env.DATABASE_URL,
    type: 'postgres',
    port: 5432,
    synchronize: true,
    autoLoadEntities: true
  }), SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
