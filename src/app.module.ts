import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DBConfig } from './config';

@Module({
  imports: [SequelizeModule.forRoot(DBConfig()), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
