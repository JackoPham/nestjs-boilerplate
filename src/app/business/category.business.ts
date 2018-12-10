import { Injectable, Inject } from '@nestjs/common';
import Category from '../entity/category.entity';
import CategoryRepository from '../repository/category.repository';
import { Message } from '../model/common/Message';
import { CheckingHelper } from 'aluha-ezcode-helper';
import DataBaseConstant from '../../system/enums/database.enum';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(DataBaseConstant.CATEGORY_PROVIDER)
    private readonly categoryRepository: CategoryRepository
  ) {}

  root(): string {
    try {
      return 'Api was working...';
    } catch (error) {
      throw error;
    }
  }
  async create(body: Category): Promise<Message> {
    const msg = new Message(1, 'Creation success category!');
    const data = await this.categoryRepository.create(body);
    const result = await this.categoryRepository.save(data);
    if (CheckingHelper.isUndefinedAndNull(result)) {
      msg.id = -1;
      msg.message = 'Creation failed category!';
    }
    return msg;
  }
}
