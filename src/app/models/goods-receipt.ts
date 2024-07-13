import { GoodsReceiptItem } from "./goods-receipt-item";
import { PurchaseOrder } from "./purchase-order";

export class GoodsReceipt {
    id?: number;
    receiptDate?: Date;
    status?: string;
    purchaseOrder?: PurchaseOrder;
    goodsReceiptItems?: GoodsReceiptItem[];
}
