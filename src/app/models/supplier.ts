import { PurchaseOrder } from "./purchase-order";

export class Supplier {
    id?: number;
    name?: string;
    contact?: string;
    email?: string;
    phone?: string;
    purchaseOrders?: PurchaseOrder[];
  }

