import { Client } from "./client";
import { QuoteItem } from "./quote-item";

export class Quote {
  id?: number;
  date?: string; // LocalDate will be handled as string in Angular
  code?: string;
  revision?: string;
  objet?: string;
  actif?: boolean;
  valide?: boolean;
  statut?: string;
  montant?: number;
  nature?: string;
  projet?: string;
  client?: Client;
  clientId?: number;
  quoteItems?: QuoteItem[];
}
