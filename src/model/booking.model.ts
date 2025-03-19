import { Column, Model, Table, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class Booking extends Model<Booking> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  idd: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  bookingDate: Date;

  // @Column({
  //   type:DataType.TEXT,
  //   allowNull : true,
  // })
  bookingInfo : Text;
}
