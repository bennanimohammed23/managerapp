import { Employee } from "./employee";

export class Payroll {
    id?: number;
    payrollDate?: Date;
    amount?: number;
    employee?: Employee; // Assuming Employee is imported correctly
}
