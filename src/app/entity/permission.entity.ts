import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import * as moment from 'moment';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  module: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  controller: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  actionName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  method: string;

  @Column({ type: 'int4', nullable: true })
  order: number;

  // #region common column
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedDate: Date;

  @Column({ type: 'int4', nullable: true })
  createdBy: number;

  @Column({ type: 'int4', nullable: true })
  updatedBy: number;

  @Column({ type: Boolean, default: false, nullable: true })
  isDeleted: boolean;

  // #endregion
}
