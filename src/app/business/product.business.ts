import { Injectable, Inject } from '@nestjs/common';
import Product from '../entity/product.entity';
import ProductRepository from '../repository/product.repository';
import DataBaseConstant from '../../system/enums/database.enum';

@Injectable()
export class ProductService {
  constructor(
    @Inject(DataBaseConstant.PRODUCT_PROVIDER)
    private readonly productRepo: ProductRepository
  ) {}

  root(): string {
    try {
      return 'Api was working...';
    } catch (error) {
      throw error;
    }
  }
  async findAll(): Promise<Product[]> {
    try {
      const data = await this.productRepo.find();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
