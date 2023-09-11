import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ProductModule } from './product/product.module';
import { Users } from './users/entities/users.entity';
import { Products } from './product/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: '12345',
      password: '12345',
      database: '12345',
      entities: [Users, Products],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    OrdersModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
