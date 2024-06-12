import docClient from './dynamoDBClient.js';
import { GetCommand, PutCommand, DeleteCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { EmployeeRepository } from '../../domain/repositories/employeeRepository.js';
import { Employee } from '../../domain/entities/employee.js';

export class DynamoDBEmployeeRepository implements EmployeeRepository {
    async findById(id: string): Promise<Employee | null> {
        const params = new GetCommand({
            TableName: 'employee-prd',
            Key: { id }
        });
        const response = await docClient.send(params);
        return response.Item as Employee;
    }

    async create(employee: Employee): Promise<Employee> {
        const params = new PutCommand({
            TableName: 'employee-prd',
            Item: employee
        });
        await docClient.send(params);
        return employee;
    }

    async update(id: string, employee: Employee): Promise<Employee> {
        const params = new UpdateCommand({
            TableName: 'employee-prd',
            Key: { id },
            UpdateExpression: 'set #name = :name, #age = :age, #role = :role',
            ExpressionAttributeNames: {
                '#name': 'name',
                '#age': 'age',
                '#role': 'role'
            },
            ExpressionAttributeValues: {
                ':name': employee.name,
                ':age': employee.age,
                ':role': employee.role
            },
            ReturnValues: 'ALL_NEW'
        });
        const response = await docClient.send(params);
        return response.Attributes as Employee;
    }

    async delete(id: string): Promise<void> {
        const params = new DeleteCommand({
            TableName: 'employee-prd',
            Key: { id }
        });
        await docClient.send(params);
    }
}
   