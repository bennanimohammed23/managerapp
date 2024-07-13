import { Product } from "./product";
import { Quote } from "./quote";

export class QuoteItem {
    id?: number;
    quote?: Quote;
    product?: Product;
    quantity?: number;
    price?: number;
}
