import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Permission } from '../entity/permission.entity';

@Injectable()
export class PermissionService {
  constructor(
    @Inject('PermissionRepositoryToken')
    private readonly permissionRepo: Repository<Permission>
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
