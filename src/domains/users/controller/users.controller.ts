import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class UsersController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}