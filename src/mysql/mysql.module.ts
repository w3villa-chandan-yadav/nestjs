import { Global, Module } from '@nestjs/common';
import { MysqlService } from './mysql.service';  // Import the MysqlService
import { MysqlServiceUser } from './mysql.serviceUser';


// @Global()
@Module({
  // providers: [MysqlService,MysqlServiceUser],  
  // exports: [MysqlService,MysqlServiceUser],    
})
export class MysqlModule {}
