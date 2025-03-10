import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class MysqlService implements OnModuleInit, OnModuleDestroy {
  private pool: mysql.Pool;

  async onModuleInit() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      connectionLimit: 10,  
      queueLimit: 0,       
      waitForConnections: true,  
    });

    await this.switchToManagementDatabase();
  }

  private async switchToManagementDatabase() {
    const connection = await this.pool.getConnection();

    try {
      // Ensure you're switching to the correct database
      await connection.query('USE management');
      console.log('Switched to "management" database');
    } catch (error) {
      if (error.code === 'ER_BAD_DB_ERROR') {
        console.log('Database "management" does not exist, creating it...');
        await connection.query('CREATE DATABASE management');
        console.log('Database "management" created');
        await connection.query('USE management');
        console.log('Switched to "management" database');
      } else {
        console.error('Error connecting to database:', error);
        throw error;
      }
    } finally {
      connection.release();
    }
  }

  async onModuleDestroy() {
    await this.pool.end();
    console.log('MySQL pool closed');
  }

  getPool() {
    return this.pool;
  }
}
