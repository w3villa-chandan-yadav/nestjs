import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { MysqlService } from './mysql.service';  // Import the MysqlService

@Injectable()
export class MysqlServiceUser implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly mysqlService: MysqlService) {}

  async onModuleInit() {
    await this.switchToManagementDatabase();
  }

  private async switchToManagementDatabase() {
    const pool = this.mysqlService.getPool();
    const connection = await pool.getConnection();

    try {
      await connection.query('USE management');

      const [rows] = await connection.query(`
        SHOW TABLES LIKE 'user'
      `);

      if (Array.isArray(rows) &&rows.length === 0) {
        console.log('User table does not exist. Creating table...');
        await connection.query(`
          CREATE TABLE user (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);
        console.log('User table created.');
      } else {
        console.log('User table already exists.');
      }
    } catch (error) {
      console.error('Error checking/creating user table:', error);
    } finally {
      connection.release();
    }
  }

  async onModuleDestroy() {
    // No need to handle pool here since it's managed by MysqlService
  }
}
