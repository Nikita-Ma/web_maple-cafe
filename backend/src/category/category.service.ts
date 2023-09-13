import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.save(createCategoryDto);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} category`;
  // }

  async update(updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository
      .createQueryBuilder()
      .where({ id: updateCategoryDto.id })
      .update('Category')
      .set({
        name: updateCategoryDto.name,
      })
      .execute();
    if (!category) {
      throw Error('Category not exist');
    }
    return category;
  }

  remove(id: number) {
    return this.categoryRepository
      .createQueryBuilder('Category')
      .where({ id: id })
      .delete()
      .execute();
  }
}
