import { Injectable, Inject } from '@nestjs/common';
import { Permission } from '../entity/permission.entity';
import PermissionRepository from '../repository/permission.repository';
import DataBaseConstant from '../../system/enums/database.enum';

@Injectable()
export class PermissionService {
  constructor(
    @Inject(DataBaseConstant.PERMISSION_PROVIDER)
    private readonly permissionRepo: PermissionRepository
  ) {}

  root(): string {
    try {
      return 'Api was working...';
    } catch (error) {
      throw error;
    }
  }
  async findAll(): Promise<Permission[]> {
    try {
      const data = await this.permissionRepo.find();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
