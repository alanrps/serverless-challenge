import { Request, Response } from 'express';
import { EmployeeController } from '../src/application/interfaces/controllers/employeeController';
import { EmployeeService } from '../src/domain/services/employeeService';

describe('EmployeeController', () => {
  let employeeService: EmployeeService;
  let employeeController: EmployeeController;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: jest.Mock;

  beforeEach(() => {
    employeeService = {
      getEmployeeById: jest.fn(),
      createEmployee: jest.fn(),
      updateEmployee: jest.fn(),
      deleteEmployee: jest.fn(),
    } as unknown as EmployeeService;

    employeeController = new EmployeeController(employeeService);

    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  describe('get', () => {
    it('should return an employee if found', async () => {
      const employee = { id: '1', name: 'John Doe' };
      (employeeService.getEmployeeById as jest.Mock).mockResolvedValue(employee);

      req.params = { id: '1' };

      await employeeController.get(req as Request, res as Response);

      expect(employeeService.getEmployeeById).toHaveBeenCalledWith('1');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(employee);
    });

    it('should return 404 if employee not found', async () => {
      (employeeService.getEmployeeById as jest.Mock).mockResolvedValue(null);

      req.params = { id: '1' };

      await employeeController.get(req as Request, res as Response);

      expect(employeeService.getEmployeeById).toHaveBeenCalledWith('1');
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "Employee not found" });
    });

    it('should return 500 if there is an error', async () => {
      (employeeService.getEmployeeById as jest.Mock).mockRejectedValue(new Error('error'));

      req.params = { id: '1' };

      await employeeController.get(req as Request, res as Response);

      expect(employeeService.getEmployeeById).toHaveBeenCalledWith('1');
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Could not retrieve employee" });
    });
  });

  describe('create', () => {
    it('should create a new employee', async () => {
      const employeeData = { name: 'John Doe' };
      const newEmployee = { id: '1', ...employeeData };
      (employeeService.createEmployee as jest.Mock).mockResolvedValue(newEmployee);

      req.body = employeeData;

      await employeeController.create(req as Request, res as Response);

      expect(employeeService.createEmployee).toHaveBeenCalledWith(employeeData);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(newEmployee);
    });

    it('should return 500 if there is an error', async () => {
      const employeeData = { name: 'John Doe' };
      (employeeService.createEmployee as jest.Mock).mockRejectedValue(new Error('error'));

      req.body = employeeData;

      await employeeController.create(req as Request, res as Response);

      expect(employeeService.createEmployee).toHaveBeenCalledWith(employeeData);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Error creating employee" });
    });
  });

  describe('update', () => {
    it('should update an employee if found', async () => {
      const employeeData = { name: 'Jane Doe' };
      const updatedEmployee = { id: '1', ...employeeData };
      (employeeService.updateEmployee as jest.Mock).mockResolvedValue(updatedEmployee);

      req.params = { id: '1' };
      req.body = employeeData;

      await employeeController.update(req as Request, res as Response);

      expect(employeeService.updateEmployee).toHaveBeenCalledWith('1', employeeData);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(updatedEmployee);
    });

    it('should return 404 if employee not found', async () => {
      const employeeData = { name: 'Jane Doe' };
      (employeeService.updateEmployee as jest.Mock).mockResolvedValue(null);

      req.params = { id: '1' };
      req.body = employeeData;

      await employeeController.update(req as Request, res as Response);

      expect(employeeService.updateEmployee).toHaveBeenCalledWith('1', employeeData);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "Employee not found" });
    });

    it('should return 500 if there is an error', async () => {
      const employeeData = { name: 'Jane Doe' };
      (employeeService.updateEmployee as jest.Mock).mockRejectedValue(new Error('error'));

      req.params = { id: '1' };
      req.body = employeeData;

      await employeeController.update(req as Request, res as Response);

      expect(employeeService.updateEmployee).toHaveBeenCalledWith('1', employeeData);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Error updating employee" });
    });
  });

  describe('delete', () => {
    it('should delete an employee if found', async () => {
      (employeeService.deleteEmployee as jest.Mock).mockResolvedValue(true);

      req.params = { id: '1' };

      await employeeController.delete(req as Request, res as Response);

      expect(employeeService.deleteEmployee).toHaveBeenCalledWith('1');
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Employee deleted" });
    });

    it('should return 500 if there is an error', async () => {
      (employeeService.deleteEmployee as jest.Mock).mockRejectedValue(new Error('error'));

      req.params = { id: '1' };

      await employeeController.delete(req as Request, res as Response);

      expect(employeeService.deleteEmployee).toHaveBeenCalledWith('1');
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Error deleting employee" });
    });
  });
});
