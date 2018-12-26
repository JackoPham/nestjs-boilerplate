import { Injectable } from '@nestjs/common';

@Injectable()
export class PerService {
  private readonly cats = [{ id: 1, name: 'Cat', age: 5 }];

  create(cat: any) {
    cat.id = new Date().getHours();
    this.cats.push(cat);
    return cat;
  }

  findAll(): any[] {
    return this.cats;
  }

  findOneById(id: number): any {
    return this.cats.find(cat => cat.id === id);
  }
}
