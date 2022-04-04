import { IsNotEmpty, IsString } from "class-validator";

export class CreateNftDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    owner: string;
    @IsString()
    @IsNotEmpty()
    picture: string;
}
