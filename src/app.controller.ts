import { Body, Controller, Post } from '@nestjs/common';
import { CreateHotelBody } from './dtos/create-hotel';
import { ChangeHotelBody } from './dtos/change-hotel-info';
import { HotelsRepository } from './repositories/hotels-repository';

@Controller('app')
export class AppController {
  constructor(private hotelsRepository: HotelsRepository) {}

  @Post('createHotel')
  async createHotel(@Body() body: CreateHotelBody) {
    const { name, description, state, city } = body;
    await this.hotelsRepository.create(name, description, state, city);
  }

  @Post('changeHotel')
  async changeHotel(@Body() body: ChangeHotelBody) {
    await this.hotelsRepository.change(body);
  }
}
