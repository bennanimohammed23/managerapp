import { Client } from "./client";
import { QuoteItem } from "./quote-item";

export class Quote {
    id?: number;
  quoteDate?: string; // LocalDate will be handled as string in Angular
  status?: string;
  client?: Client;
  quoteItems?: QuoteItem[];
}
