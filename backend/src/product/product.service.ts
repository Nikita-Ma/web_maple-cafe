import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private productRepository: Repository<Products>,
  ) {
  }

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.save(createProductDto);
  }

  async findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id: id });
    if (!product) {
      throw new Error(`Product with ID ${product} not found`);
    }
    return product;
  }

  async update(updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.createQueryBuilder()
      .update('Products')
      .set({
        label: updateProductDto.label,
        image: updateProductDto.image,
        description: updateProductDto.description,
        nowPrice: updateProductDto.nowPrice,
        oldPrice: updateProductDto.oldPrice,
        category: updateProductDto.category,
      })
      .where({ id: updateProductDto.id })
      .execute();

    // If the product with the given id doesn't exist, you can handle this case accordingly
    if (!product) {
      throw new Error(`Product with ID ${updateProductDto.id} not found`);
    }


    // Save the updated product entity to the database

    return product;
  }

  remove(id: number) {
    return this.productRepository.createQueryBuilder('products').where({ id: Number(id) }).delete().execute();

  }
}
