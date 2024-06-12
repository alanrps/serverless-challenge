import { EmployeeService } from "../../domain/services/employeeService.js";

export class DeleteEmployee {
    constructor(private employeeService: EmployeeService) {}

    async execute(id: string): Promise<void> {
        await this.employeeService.deleteEmployee(id);
    }
}