import { Employee } from "../../domain/entities/employee.js";
import { EmployeeService } from "../../domain/services/employeeService.js";

export class CreateEmployee {
    constructor(private employeeService: EmployeeService) {}

    async execute(employeeData: Employee): Promise<Employee> {
        return await this.employeeService.createEmployee(employeeData);
    }
}