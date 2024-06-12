import serverless from 'serverless-http';
import app from './infrastructure/webserver/routes/server.js';

export const handler = serverless(app);