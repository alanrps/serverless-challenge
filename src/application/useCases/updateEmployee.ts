import { Employee } from "../../domain/entities/employee.js";
import { EmployeeService } from "../../domain/services/employeeService.js";

export class updateEmployee {
    constructor(private employeeService: EmployeeService) {}

    async execute(id: string, employeeData: Employee): Promise<Employee | null> {
        return await this.employeeService.updateEmployee(id, employeeData);
    }
}