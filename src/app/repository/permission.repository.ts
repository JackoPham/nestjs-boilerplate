import { EntityRepository, Repository } from 'typeorm';
import Permission from '@entity/permission.entity';

@EntityRepository(Permission)
class PermissionRepository extends Repository<Permission> {}
export default PermissionRepository;
