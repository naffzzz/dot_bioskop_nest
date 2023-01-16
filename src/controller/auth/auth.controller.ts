import { Get, Controller, Request, Render, Patch, Param, Body, Put, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthDto } from 'src/domains/auth/dto/auth.dto';
import { JwtAuthGuard } from 'src/domains/auth/jwt-auth.guard';
import { AuthService } from 'src/domains/auth/service/auth.service';

@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  
  @Post('signin')
  signIn(@Body() authDto: AuthDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(authDto);
  }

}