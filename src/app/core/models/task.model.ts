import {Item} from './item.model';

export class Task extends Item {
  id: string;
  name: string;
  complete: boolean;
}
