import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class MoviesController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}