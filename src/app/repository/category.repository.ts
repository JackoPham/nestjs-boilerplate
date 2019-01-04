import { EntityRepository, Repository } from 'typeorm';
import Category from '../entity/category.entity';

@EntityRepository(Category)
class CategoryRepository extends Repository<Category> {}

export default CategoryRepository;
