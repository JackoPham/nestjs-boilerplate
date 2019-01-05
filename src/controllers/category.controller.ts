import { Get, Controller, Body, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from '@business/category.business';
import Category from '@entity/category.entity';
import { AuthGuard } from '@system/guard/auth.guard';
import { Authorized } from '@system/decorator/roles.decorator';

@Controller('category')
@UseGuards(AuthGuard)
class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('test')
  root(): string {
    return this.categoryService.root();
  }

  @Post('create')
  @Authorized()
  async create(@Body() body: Category) {
    try {
      const data = await this.categoryService.create(body);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
export default CategoryController;
