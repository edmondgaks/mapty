/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: "3434343545",
      name: "Item 1",
      qty: 100,
      description: "This is item one"
    },
    {
        id: "98494585",
        name: "Item 2",
        qty: 50,
        description: "This is item two"
      },
  ];
  findAll(): Item[] {
    return this.items;
  }
}
