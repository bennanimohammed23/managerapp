import { Payroll } from "./payroll";

export class Employee {
    id?: number;
    name?: string;
    position?: string;
    email?: string;
    phone?: string;
    payrolls?: Payroll[];
}
