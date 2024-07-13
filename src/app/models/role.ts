import { Permission } from "./permission";
import { User } from "./user";

export class Role {
    id?: number;
    name?: string;
    users?: User[];
    permissions?: Permission[]
}
