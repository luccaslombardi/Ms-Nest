import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { MembersRepository } from './repositories/members-repository';

@Controller('app')
export class AppController {
  constructor(
    private membersRepository: MembersRepository
  ) {}

  @Post('createMember')
  async createMember(@Body() body: CreateTeamMemberBody) {
    const { name, 'function': memberFunction } = body;

    await this.membersRepository.create(name, memberFunction)
  }
}
