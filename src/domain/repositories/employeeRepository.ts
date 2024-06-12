import { Employee } from "../entities/employee.js";

export interface EmployeeRepository {
  findById(id: string): Promise<Employee | null>;
  create(employee: Employee): Promise<Employee>;
  update(id: string, employee: Employee): Promise<Employee | null>;
  delete(id: string): Promise<void>;
}