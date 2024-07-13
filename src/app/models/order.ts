import { Client } from "./client";
import { OrderItem } from "./order-item";

export class Order {
    id?: number;
  orderDate?: string; // LocalDate will be handled as string in Angular
  status?: string;
  client?: Client;
  orderItems?: OrderItem[];
}
