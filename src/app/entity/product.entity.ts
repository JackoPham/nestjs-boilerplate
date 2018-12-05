import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  sku: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @IsNotEmpty()
  name: string;

  @Column({
    type: 'int4',
  })
  @IsNotEmpty()
  customerId: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  thumbnailMaster: string;

  @Column({
    type: 'varchar',
  })
  @IsNotEmpty()
  imei: string;

  @Column({
    type: 'int4',
    default: 0,
  })
  @IsNotEmpty()
  imeiId: number;

  @Column({
    type: 'int4',
  })
  @IsNotEmpty()
  modelId: number;

  @Column({
    type: 'int4',
  })
  @IsNotEmpty()
  categoryId: number;

  @Column({
    type: 'int4',
  })
  @IsNotEmpty()
  brandId: number;

  @Column({
    type: 'numeric',
  })
  @IsNotEmpty()
  priceOrigin: number;

  @Column({
    type: 'numeric',
  })
  priceBrand: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  @IsNotEmpty()
  color: string;

  @Column({
    type: Boolean,
    default: false,
  })
  isAvailable: boolean;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'int4',
  })
  createdBy: number;

  @Column({
    type: 'int4',
    nullable: true,
  })
  updatedBy: number;

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
    type: Boolean,
    default: false,
  })
  isDeleted: boolean;
}
