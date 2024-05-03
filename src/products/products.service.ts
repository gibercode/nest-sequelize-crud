import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  async create(productData: ProductDto): Promise<Product> {
    try {
      const product = new Product(productData);
      return await product.save();
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      return await this.productModel.findAll();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<Product> {
    try {
      return await this.productModel.findOne({ where: { id } });
    } catch (error) {
      return error;
    }
  }

  async update(
    id: number,
    productData: ProductDto,
  ): Promise<[number, Product[]]> {
    try {
      const [affectedCount, affectedRows] = await this.productModel.update(
        productData,
        {
          where: { id },
          returning: true,
        },
      );
      return [affectedCount, affectedRows as Product[]];
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<number> {
    try {
      return await this.productModel.destroy({ where: { id } });
    } catch (error) {
      return error;
    }
  }
}
