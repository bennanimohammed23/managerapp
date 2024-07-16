import { Client } from "./client";
import { OrderItem } from "./order-item";

export class Order {
  id?: number;
  orderDate?: string; // LocalDate will be handled as string in Angular
  status?: string;
  code?: string;
  typeBC?: string;
  typeNBT?: string;
  projet?: string;
  actif?: boolean;
  valide?: boolean;
  montant?: number;
  contactCadre?: string;
  nature?: string;
  client?: Client;
  orderItems?: OrderItem[];
}