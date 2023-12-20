import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto'
import { CreateTeamMemberBody } from './dtos/create-team-member-body';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, 'function': memberFunction } = body;

    
    const member = await this.prisma.teamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction
      }
    })
    return {
      message: "Membro criado com sucesso: "  + member.name
    }
  }
}
