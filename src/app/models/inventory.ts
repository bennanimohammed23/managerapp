import { Product } from "./product";
import { Warehouse } from "./warehouse";

export class Inventory {
    id?: number;
  warehouse?: Warehouse;
  product?: Product;
  quantity?: number;
}
