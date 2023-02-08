import {Item} from "./item.model";

export class ItemCollection<T> extends Item {
  '@context': string;
  private itemList: T[] = [];

  constructor() {
    super();
  }

  public getItems(): T[] {
    return this.itemList;
  }

  public setItems(updatedItemList: T[]): T[] {
    return this.itemList = updatedItemList;
  }

  public addAll(itemList: T[]): T[] {
    return this.itemList.concat(itemList);
  }

  public addItem(item: T): number {
    return this.itemList.push(item);
  }

  public clearItem(): T[] {
    return this.itemList.splice(0);
  }

  public removeItem(targetItem: T): T[] {
    this.itemList = this.itemList.filter(item => item !== targetItem);
    return this.itemList;
  }

  public getTotalItems(): number {
    return this.itemList.length;
  }

}
