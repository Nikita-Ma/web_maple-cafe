import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {

  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return  this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch()
  update(@Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productService.remove(id);
  }
}
