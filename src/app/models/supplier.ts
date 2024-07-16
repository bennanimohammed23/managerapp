import { Product } from "./product";
import { PurchaseOrder } from "./purchase-order";

export class Supplier {
    id?: number;
    name?: string;
    contact?: string;
    email?: string;
    phone?: string;
    products?: Product[];
    productNames?: string[];
    purchaseOrders?: PurchaseOrder[];
    purchaseOrderIds?: number[]; 
  }

