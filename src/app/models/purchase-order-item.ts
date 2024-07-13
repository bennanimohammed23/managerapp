import { Product } from "./product";

export class PurchaseOrderItem {
    id?: number;
    purchaseOrder?: PurchaseOrderItem;
    product?: Product;
    quantity?: number;
}

