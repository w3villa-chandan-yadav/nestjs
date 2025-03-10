// export interface AuthDto {
//     email:string,
//     password:String
// }

import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email:string;

    // @IsString()
    @IsNumber()
    @IsNotEmpty()
    password:number;
}