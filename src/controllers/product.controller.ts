import { Get, Controller, Headers } from '@nestjs/common';
import { ProductService } from '@business/product.business';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('products')
@Controller('product')
class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('test')
  root(): string {
    return this.productService.root();
  }
  @Get('list')
  async getList() {
    return await this.productService.findAll();
  }
}
export default ProductController;
