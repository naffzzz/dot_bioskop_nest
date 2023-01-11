import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './domains/users/entity/users.entity';
import { Movies } from './domains/movies/entity/movies.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'dot_bioskop',
      entities: [Users, Movies],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
