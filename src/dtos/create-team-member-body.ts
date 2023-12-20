import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamMemberBody {
    @IsNotEmpty({
        message: "Please enter a name"
    })
    @Length(3)
    name: string;

    @IsNotEmpty({
        message: "Please enter a team name"
    })
    function: string;
}