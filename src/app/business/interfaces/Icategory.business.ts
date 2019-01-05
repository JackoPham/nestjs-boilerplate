import Category from '@entity/category.entity';
import { Message } from '@model/common/Message';

interface ICategoryBusiness {
  getList(name?: string, page?: number, limit?: number): Promise<Category[]>;
  create(data: Category): Promise<Message | undefined>;
}

export default ICategoryBusiness;
