import { Request, Response } from "express";
import { EmployeeService } from "../../../domain/services/employeeService.js";

export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}
    async get(req: Request, res: Response) {
        const { id } = req.params;
            try {
                const employee = await this.employeeService.getEmployeeById(id);
                if (employee) {
                    res.status(200).json(employee);
                } else {
                    res.status(404).json({ error: "Employee not found" });
                }
            } catch (e) {
                res.status(500).json({ error: "Could not retrieve employee" });
            }
    }

    async create(req: Request, res: Response) {
        const employeeData = req.body;
        try {
            const newEmployee = await this.employeeService.createEmployee(employeeData);
            res.status(201).json(newEmployee);
        } catch (e) {
            res.status(500).json({ error: "Error creating employee" });
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const employeeData = req.body;
        try {
            const updatedEmployee = await this.employeeService.updateEmployee(id, employeeData);
            if (updatedEmployee) {
                res.status(200).json(updatedEmployee);
            } else {
                res.status(404).json({ error: "Employee not found" });
            }
        } catch (e) {
            res.status(500).json({ error: "Error updating employee" });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await this.employeeService.deleteEmployee(id);
            res.status(200).json({ message: "Employee deleted" });
        } catch (e) {
            res.status(500).json({ error: "Error deleting employee" });
        }
    }

}