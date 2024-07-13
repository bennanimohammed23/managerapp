import { AuditLog } from "./audit-log";
import { Role } from "./role";

export class User {
    id?: number;
    username?: string;
    password?: string;
    email?: string;
    active?: boolean;
    roles?: Role[];
    auditLogs?: AuditLog[];


}
