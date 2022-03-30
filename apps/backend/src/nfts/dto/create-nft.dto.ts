import { IsNotEmpty, IsString } from "class-validator";

export class CreateNftDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    adresse: bigint;
    @IsString()
    @IsNotEmpty()
    picture: string;
}
