import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './domains/users/service/users.service';
import { UsersModule } from './domains/users/module/users.module';
import { TagsController } from './controller/tags/tags.controller';
import { TagsService } from './domains/tags/service/tags.service';
import { TagsModule } from './domains/tags/module/users.module';
import { StudiosModule } from './domains/studios/module/users.module';
import { StudiosService } from './domains/studios/service/studios.service';
import { StudiosController } from './controller/studios/studios.controller';
import { OrdersService } from './domains/orders/service/orders.service';
import { OrdersController } from './controller/orders/orders.controller';
import { OrdersModule } from './domains/orders/module/orders.module';
import { OrderItemsModule } from './domains/orders/module/order-items.module';
import { MoviesController } from './controller/movies/movies.controller';
import { MoviesModule } from './domains/movies/module/movies.module';
import { MoviesService } from './domains/movies/service/movies.service';
import { MovieSchedulesModule } from './domains/movies/module/movie-shedules.module';
import { MovieTagsModule } from './domains/movies/module/movie-tags.module';
import { SchedulesModule } from './domains/schedules/module/schedules.module';
import { SchedulesController } from './controller/schedules/schedules.controller';
import { SchedulesService } from './domains/schedules/service/schedules.service';
import dataSource, { dataSourceOptions } from '../db/data-source';
import { AuthModule } from './domains/auth/module/auth.module';
import { AuthController } from './controller/auth/auth.controller';
import { AuthService } from './domains/auth/service/auth.service';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
// import { LocalStrategy } from './domains/auth/local.statregy';
import { JwtStrategy } from './domains/auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    TagsModule,
    StudiosModule,
    OrdersModule,
    OrderItemsModule,
    MoviesModule,
    MovieSchedulesModule,
    MovieTagsModule,
    SchedulesModule,
    PassportModule,
    AuthModule
  ], 
  controllers: [AppController, 
                UsersController,
                TagsController, 
                StudiosController,
                OrdersController,
                MoviesController,
                SchedulesController,
                AuthController
              ],
  providers: [AppService, 
              UsersService, 
              TagsService, 
              StudiosService,
              OrdersService,
              MoviesService,
              SchedulesService,
              AuthService,
              JwtService,
              JwtStrategy
            ],
})
export class AppModule {}
