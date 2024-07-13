import { Route } from "./route";

export class Shipment {
    id?: number;
    shipmentDate?: Date;
    status?: string;
    routes?: Route[];
}
