import { Module } from '@nestjs/common';
import { MoviesModule } from './module/movies.module';
import { MoviesService } from './service/movies.service';
import { MoviesController } from '../../controller/movies/movies.controller';

@Module({
  imports: [MoviesModule],
  providers: [MoviesService],
  controllers: [MoviesController]
})
export class MovieHttpModule {}
