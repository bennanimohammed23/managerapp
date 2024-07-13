import { Client } from "./client";

export class OrderItem {

    id?: number;
    orderDate?: string; // LocalDate will be handled as string in Angular
    status?: string;
    client?: Client;
    orderItems?: OrderItem[];
}
