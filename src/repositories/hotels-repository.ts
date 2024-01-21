import { changeProps } from "./prisma/prisma-member-repository";

export abstract class HotelsRepository {
    abstract create(name: string, description: string, state: string, city: string, categories?:string): Promise<void>
    abstract change(hotelChangeObject: changeProps): Promise<void>
}
