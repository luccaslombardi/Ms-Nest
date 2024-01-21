import { PrismaService } from "src/database/prisma.service";
import { HotelsRepository } from "../hotels-repository";
import { Injectable } from "@nestjs/common";

export interface changeProps {
    id: number;
    name?: string;
    description?: string;
    state?: string;
    city?: string;
}

@Injectable()
export class PrismaHotelRepository implements HotelsRepository {
    constructor(
        private prisma: PrismaService
    ) {}
    async create(nome: string, description: string, state: string, city: string): Promise<void> {
        await this.prisma.hotel.create({
            data: {
                nome, 
                description, 
                state, 
                city
            }
        })
    }

    async change(hotelChangeObject: changeProps): Promise<void> {
        const {id, name, description, state, city} = hotelChangeObject

        await this.prisma.hotel.update({
            where: { 
                id, 
            },
            data: {
                nome: name,
                description,
                state,
                city
            },
        })
    }
}