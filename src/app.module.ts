import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MysqlModule } from './mysql/mysql.module';
import { User } from './model/user.model';
import { Booking } from './model/booking.model';

@Module({
  imports: [  SequelizeModule.forRoot({
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',     
    database: 'management',
    models: [User, Booking ],  // Register models here
    synchronize: false,  // Don't auto-sync (use migrations)
    autoLoadModels: true,
  }),
  SequelizeModule.forFeature([User,Booking]),AuthModule, UserModule, BookmarkModule, MysqlModule],
})
export class AppModule {}
