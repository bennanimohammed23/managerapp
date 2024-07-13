import { Shipment } from "./shipment";

export class Route {
    id?: number;
    origin?: string;
    destination?: string;
    distance?: number;
    shipment?: Shipment;
}
