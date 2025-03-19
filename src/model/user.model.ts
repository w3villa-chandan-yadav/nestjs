import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';

@Table({tableName:"userss"})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idd: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  name:string
}
