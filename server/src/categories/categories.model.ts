import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CategoryCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoryCreationAttr> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'OTHER', description: 'Other' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'Other category', description: 'Other category' })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;
}
