import { Injectable } from "@nestjs/common";
// import { MysqlService } from "../mysql/mysql.service";
import { AuthDto } from "src/dto";

@Injectable()
export class AuthService {
    // constructor(private readonly mysqlService: MysqlService) {}

    async signup(dto:AuthDto) {
        // const connection = await this.mysqlService.getPool(); 
    //    const pool = await this.mysqlService.getPool(); 
    // //    const pool = await connection.getConnection(); // no need to this 
    //     try {
    //         const [rows] = await pool.query('SELECT * FROM users');
    //         console.log(rows);
    //     } catch (error) {
    //         console.error('Error during signup query:', error);
    //         throw new Error('Database query failed');
    //     } finally {
    //         // pool.release();
    //     }
        return "I am signup service";
    }

    signin() {
        return "I am sign in service";
    }
}
