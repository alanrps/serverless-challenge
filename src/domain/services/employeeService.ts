import { Employee } from "../entities/employee.js";
import { EmployeeRepository } from "../repositories/employeeRepository.js";

export class EmployeeService {
    constructor(private employeeRepository: EmployeeRepository) {}

    async getEmployeeById(id: string): Promise<Employee | null> {
        return await this.employeeRepository.findById(id);
    }

    async createEmployee(employeeData: Employee): Promise<Employee> {
        const employee = new Employee(employeeData);
        return await this.employeeRepository.create(employee);
    }

    async updateEmployee(id: string, employeeData: Employee): Promise<Employee | null> {
        const employee = new Employee(employeeData);
        return await this.employeeRepository.update(id, employee);
    }

    async deleteEmployee(id: string): Promise<void> {
        await this.employeeRepository.delete(id);
    }
}