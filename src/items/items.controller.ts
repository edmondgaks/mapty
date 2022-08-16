import { Controller, Get, Post,Put,Delete, Body, Req, Res } from '@nestjs/common';
import { Request,Response } from 'express';
import { CreateItemDto } from './dto/create-item.dto';
@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Hello World');
  }
  @Post()
  create(@Body() CreateItemDto: CreateItemDto): string {
    return `Name: ${CreateItemDto.name} - Description: ${CreateItemDto.description}`;
  }
}

