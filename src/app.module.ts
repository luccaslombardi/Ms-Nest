import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { HotelsRepository } from './repositories/hotels-repository';
import { PrismaHotelRepository } from './repositories/prisma/prisma-member-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: HotelsRepository,
      useClass: PrismaHotelRepository,
    }
  ]
})
export class AppModule {}
