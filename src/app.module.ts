import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MysqlModule } from './mysql/mysql.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, MysqlModule],
})
export class AppModule {}
