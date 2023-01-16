import { Controller, Request, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { AppService } from './app.service';
import { AuthDto } from './domains/auth/dto/auth.dto';
import { JwtAuthGuard } from './domains/auth/jwt-auth.guard';
// import { LocalAuthGuard } from './domains/auth/local-auth.guard';
import { AuthService } from './domains/auth/service/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): (any) {
    return this.appService.getHello();
  }
}
