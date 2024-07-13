import { Order } from "./order";
import { Quote } from "./quote";

export class Client {
    id?: number;
    name?: string;
    email?: string;
    phone?: string;
    orders?: Order[];
    quotes?: Quote[];
}
