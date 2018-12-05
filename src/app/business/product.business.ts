import { Injectable, Inject } from '@nestjs/common';
import Product from '../entity/product.entity';
import ProductRepository from '../repository/product.repository';

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepositoryToken')
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
