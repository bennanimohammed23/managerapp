import { Product } from "./product";

export class GoodsReceiptItem {
    id?: number;
    goodsReceipt?: GoodsReceiptItem;
    product?: Product;
    quantity?: number;
}
