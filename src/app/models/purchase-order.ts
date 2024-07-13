import { GoodsReceipt } from "./goods-receipt";
import { PurchaseOrderItem } from "./purchase-order-item";
import { Supplier } from "./supplier";

export class PurchaseOrder {
    id?: number;
    orderDate?: Date;
    status?: string;
    supplier?: Supplier;
    purchaseOrderItems?: PurchaseOrderItem[];
    goodsReceipts?: GoodsReceipt[];

}
