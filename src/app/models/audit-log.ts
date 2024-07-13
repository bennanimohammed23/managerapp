import { User } from "./user";

export class AuditLog {
    id?: number;
    action?: string;
    username?: string;
    timestamp?: Date;
    user?: User;

}
