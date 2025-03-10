import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { MysqlModule } from "src/mysql/mysql.module";

@Module({
   // imports:[MysqlModule],
   controllers:[AuthController],
   providers:[AuthService]
})
export class AuthModule {}