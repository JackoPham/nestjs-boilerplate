import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @IsNotEmpty()
  categoryName: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  // #region common column
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  updatedDate: Date;

  @Column({
    type: 'int4',
  })
  @IsNotEmpty()
  createdBy: number;

  @Column({
    type: 'int4',
    nullable: true,
  })
  updatedBy: number;

  @Column({
    type: Boolean,
    default: false,
  })
  isDeleted: boolean;

  // #endregion
}
