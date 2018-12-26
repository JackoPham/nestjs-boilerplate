import { AuthenHelper, DataHelper } from 'aluha-ezcode-helper';
import { ForbiddenException, UnauthorizedException } from '@nestjs/common';
// tslint:disable-next-line:variable-name
const Enumerable = require('linq');
export class Authen {
  static async checkPermission(action: any, roles: string[]) {
    try {
      const user = await AuthenHelper.getUser(null, action);
      const flg = roles[0];
      if (user && flg === 'Passed') {
        return true;
      } else if (user) {
        if (user && user.role && user.role.length) {
          let controller = '';
          let method = '';
          if (roles.length > 0) {
            const type = roles[0];
            if (type === 'None') {
              return true;
            }
            controller = roles[0];
            method = roles[1];
          } else {
            const url = action.request.path;
            const urls = DataHelper.getContextUrl(url);
            if (urls) {
              controller = urls.controller;
              method = urls.action;
            }
          }
          const enumerableData = Enumerable.from(user.role);
          const getActions = enumerableData
            .where(
              x =>
                x.Permission &&
                (x.Permission.controller === controller &&
                  x.Permission.method === method)
            )
            .firstOrDefault();
          if (getActions) return true;
          else throw new ForbiddenException('Permission denied!');
        }
        throw new UnauthorizedException('Permission denied!');
      }
    } catch (error) {
      return false;
    }
  }

  static async removeToken(token: string) {
    const result = await AuthenHelper.removeRedisByKey(token);
    return result;
  }
}
