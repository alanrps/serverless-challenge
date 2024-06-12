import { Employee } from "../../domain/entities/employee.js";
import { EmployeeService } from "../../domain/services/employeeService.js";

export class GetEmployeeById {
    constructor(private employeeService: EmployeeService) {}

    async execute(id: string): Promise<Employee | null> {
        return await this.employeeService.getEmployeeById(id);
    }
}