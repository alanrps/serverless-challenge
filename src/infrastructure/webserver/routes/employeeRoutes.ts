import express, { Request, Response } from 'express';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { EmployeeService } from '../../../domain/services/employeeService.js';
import { DynamoDBEmployeeRepository } from '../../database/dynamoDBEmployeeRepository.js';
import { EmployeeController } from '../../../application/interfaces/controllers/employeeController.js';

const router = express.Router();
const employeeRepository = new DynamoDBEmployeeRepository();
const employeeService = new EmployeeService(employeeRepository);
const employeeController = new EmployeeController(employeeService);

router.get('/:id', async (req: Request, res: Response) => await employeeController.get(req, res));
router.post('/', async (req: Request, res: Response) => await employeeController.create(req, res));
router.patch('/:id', async (req: Request, res: Response) => await employeeController.update(req, res));
router.delete('/:id', async (req: Request, res: Response) => await employeeController.delete(req, res));

export default router;