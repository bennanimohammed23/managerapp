import { Order } from "./order";
import { Quote } from "./quote";

export class Client {
    id?: number;
  societe?: string;
  contact?: string;
  email?: string;
  phone?: string;
  profilSociete?: string;
  categorie?: string;
  sousCategorie?: string;
  actif?: boolean;
  bloque?: boolean;
  typeClient?: string;
  orderIds?: number[];
  quoteIds?: number[];
}
