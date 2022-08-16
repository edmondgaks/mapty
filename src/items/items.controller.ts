import { Controller, Get, Post,Put,Delete, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }
  @Post()
  create(@Body() CreateItemDto: CreateItemDto): string {
    return `Name: ${CreateItemDto.name} - Description: ${CreateItemDto.description}`;
  }
}
