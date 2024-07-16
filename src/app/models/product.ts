import { Category } from "./category";
import { GoodsReceiptItem } from "./goods-receipt-item";
import { Inventory } from "./inventory";
import { OrderItem } from "./order-item";
import { PurchaseOrderItem } from "./purchase-order-item";
import { QuoteItem } from "./quote-item";
import { Supplier } from "./supplier";

export class Product {
  id?: number;
  name?: string;
  price?: number;
  reference?: string;
  designation?: string;
  category?: Category;
  categoryName!:string;
  supplierName!:string;
  supplier?: Supplier;  
  city?: string;
  disponible?: boolean;
  inventories?: Inventory[];
  orderItems?: OrderItem[];
  quoteItems?: QuoteItem[];
  purchaseOrderItems?: PurchaseOrderItem[];
  goodsReceiptItems?: GoodsReceiptItem[];
}
