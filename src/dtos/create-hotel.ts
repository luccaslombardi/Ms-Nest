import { IsNotEmpty } from "class-validator";

export class CreateHotelBody {
    @IsNotEmpty({
        message: "Please enter a name"
    })
    name: string;

    @IsNotEmpty({
        message: "Please enter a description"
    })
    description: string;

    @IsNotEmpty({
        message: "Please enter a State"
    })
    state: string;

    @IsNotEmpty({
        message: "Please enter a city"
    })
    city: string;

    categories: string;
}