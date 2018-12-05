import {EntityRepository, Repository} from 'typeorm';
import Product from '../entity/product.entity';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {

}

export default ProductRepository;