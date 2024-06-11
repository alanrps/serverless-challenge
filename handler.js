import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand, DeleteCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import express from "express";
import serverless from "serverless-http";

const app = express();
const dynamoDbClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamoDbClient);

app.use(express.json());

app.get("/employee/:id", async (req, res) => {
    const { id } = req.params;
    console.log(`Fetching employee with id: ${id}`);

    const params = new GetCommand({
        TableName: 'employee-prd',
        Key: { id: Number(id) }
    });

    try {
        const response = await docClient.send(params);
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Employee not found with id" });
        }
    } catch (e) {
        console.error(`Error fetching employee with id ${id}:`, e);
        res.status(500).json({ error: "Could not retrieve employee" });
    }
});

app.delete("/employee/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);

    const params = new DeleteCommand({
        TableName: 'employee-prd',
        Key: {
            id: Number(id),
        }
    });

    try {
        const response = await docClient.send(params);
        
        if(response){
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Not find employee with id"})
        }
    } catch (e) {
        
    }
})

app.patch("/employee/:id", async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    console.log(id);

    const params = new UpdateCommand({
        TableName: 'employee-prd',
        Key: {
            id: Number(id),
        },
        
    });

    try {
        const response = await docClient.send(params);
        
        if(response){
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Not find employee with id"})
        }
    } catch (e) {
        
    }
})

app.post("/employee", async (req, res) => {
    const body = req.body;
    const params = new PutCommand({
        TableName: 'employee-prd',
        Item: body
    });

    try {
        const response = await docClient.send(params);

        if(response){
            res.status(201).json(body);
        } else {
            res.status(400).json({ error: "Could not create employee" });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Error to create employee" });
    }
})



export const handler = serverless(app);