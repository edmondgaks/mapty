import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): string {
    return 'Get all items';
  }
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }
  @Post()
  create(@Body() CreateItemDto: CreateItemDto): string {
    return `Name: ${CreateItemDto.name} - Description: ${CreateItemDto.description}`;
  }
  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete item ${id}`;
  }
  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDto.name} - Description: ${updateItemDto.description}`;
  }
}
