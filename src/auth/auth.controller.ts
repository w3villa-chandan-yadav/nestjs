import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "src/dto";


@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){ 
    }
    // signup(@Req() req:Request){
        // console.log(req.body)
        @Post('signup')
    signup(@Body() dto:AuthDto){
        console.log({
            dto
        })

        return this.authService.signup(dto)
    }
    @Post('signin')
    signin(){
       return this.authService.signin()
    }
}