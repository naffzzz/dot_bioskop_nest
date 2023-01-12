import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './domains/users/entity/users.entity';
import { Movies } from './domains/movies/entity/movies.entity';
import { Movies_Schedules } from './domains/movies/entity/movies_schedules.entity';
import { Movies_Tags } from './domains/movies/entity/movies_tags.entity';
import { Order_Items } from './domains/order_items/entity/order_items.entity';
import { Orders } from './domains/orders/entity/orders.entity';
import { Studios } from './domains/studios/entity/studios.entity';
import { Tags } from './domains/tags/entity/tags.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
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
  ],
})
export class AppModule {}
