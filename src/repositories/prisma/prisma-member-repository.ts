import { PrismaService } from "src/database/prisma.service";
import { MembersRepository } from "../members-repository";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaMemberRepository implements MembersRepository {
    constructor(
        private prisma: PrismaService
    ) {}

    async create(name: string, memberFunction: string): Promise<void> {
        await this.prisma.teamMember.create({
            data: {
              id: randomUUID(),
              name,
              function: memberFunction
            }
        })
    }
}