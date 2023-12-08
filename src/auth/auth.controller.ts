/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';
@Controller('auth')
export class AuthController {
    // auth service
    constructor(private authService: AuthService) {

    }
    @Post('/register')
    register(@Body() body: AuthDTO) {
        return this.authService.register();
    }
    @Post('/login')
    login() {
        return this.authService.login();
    }
}