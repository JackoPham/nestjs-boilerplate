import { ReflectMetadata } from '@nestjs/common';

// tslint:disable-next-line:variable-name
export const Authorized = (...roles: string[]) => {
  return ReflectMetadata('roles', roles);
};
