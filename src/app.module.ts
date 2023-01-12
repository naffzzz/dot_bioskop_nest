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
        Tags
      ],
      synchronize: true,
    }),
    UsersModule,
    TagsModule,
    StudiosModule,
    OrdersModule,
    OrderItemsModule
  ], 
  controllers: [AppController, 
                UsersController,
                TagsController, 
                StudiosController,
                OrdersController],
  providers: [AppService, 
              UsersService, 
              TagsService, 
              StudiosService,
              OrdersService],
})
export class AppModule {}
