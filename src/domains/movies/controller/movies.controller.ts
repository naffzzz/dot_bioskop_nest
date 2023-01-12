import { Get, Controller, Render } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}