import { Category } from "./category";
import { GoodsReceiptItem } from "./goods-receipt-item";
import { Inventory } from "./inventory";
import { OrderItem } from "./order-item";
import { PurchaseOrderItem } from "./purchase-order-item";
import { QuoteItem } from "./quote-item";

export class Product {
    id?: number;
  name?: string;
  price?: number;
  category?: Category;
  inventories?: Inventory[];
  orderItems?: OrderItem[];
  quoteItems?: QuoteItem[];
  purchaseOrderItems?: PurchaseOrderItem[];
}
