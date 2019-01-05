import Product from '@entity/product.entity';
import { Message } from '@model/common/Message';

interface IProductBusiness {
  getList(name?: string, page?: number, limit?: number): Promise<Product[]>;
  create(data: Product): Promise<Message | undefined>;
}

export default IProductBusiness;
