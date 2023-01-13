import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './domains/users/entity/users.entity';
import { Movies } from './domains/movies/entity/movies.entity';
import { Movies_Schedules } from './domains/movies/entity/movies_schedules.entity';
import { Movies_Tags } from './domains/movies/entity/movies_tags.entity';
import { Order_Items } from './domains/orders/entity/order_items.entity';
import { Orders } from './domains/orders/entity/orders.entity';
import { Studios } from './domains/studios/entity/studios.entity';
import { Tags } from './domains/tags/entity/tags.entity';
import { UsersController } from './domains/users/controller/users.controller';
import { UsersService } from './domains/users/service/users.service';
import { UsersModule } from './domains/users/module/users.module';
import { TagsController } from './domains/tags/controller/tags.controller';
import { TagsService } from './domains/tags/service/tags.service';
import { TagsModule } from './domains/tags/module/users.module';
import { StudiosModule } from './domains/studios/module/users.module';
import { StudiosService } from './domains/studios/service/studios.service';
import { StudiosController } from './domains/studios/controller/studios.controller';
import { OrdersService } from './domains/orders/service/orders.service';
import { OrdersController } from './domains/orders/controller/orders.controller';
import { OrdersModule } from './domains/orders/module/orders.module';
import { OrderItemsModule } from './domains/orders/module/order-items.module';
import { MoviesController } from './domains/movies/controller/movies.controller';
import { MoviesModule } from './domains/movies/module/movies.module';
import { MoviesService } from './domains/movies/service/movies.service';
import { MovieSchedulesModule } from './domains/movies/module/movie-shedules.module';
import { MovieTagsModule } from './domains/movies/module/movie-tags.module';
import { SchedulesModule } from './domains/schedules/module/schedules.module';
import { SchedulesController } from './domains/schedules/controller/schedules.controller';
import { SchedulesService } from './domains/schedules/service/schedules.service';
import { Schedules } from './domains/schedules/entity/schedules.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'dot_bioskop',
      entities: [Users, 
        Movies,
        Movies_Schedules,
        Movies_Tags,
        Order_Items,
        Orders,
        Studios,
        Schedules,
        Tags
      ],
      synchronize: true,
    }),
    UsersModule,
    TagsModule,
    StudiosModule,
    OrdersModule,
    OrderItemsModule,
    MoviesModule,
    MovieSchedulesModule,
    MovieTagsModule,
    SchedulesModule
  ], 
  controllers: [AppController, 
                UsersController,
                TagsController, 
                StudiosController,
                OrdersController,
                MoviesController,
                SchedulesController
              ],
  providers: [AppService, 
              UsersService, 
              TagsService, 
              StudiosService,
              OrdersService,
              MoviesService,
              SchedulesService
            ],
})
export class AppModule {}
