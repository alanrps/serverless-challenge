import express from 'express';
import employeeRoutes from './employeeRoutes.js';

const app = express();
app.use(express.json());
app.use('/employee', employeeRoutes);

export default app;