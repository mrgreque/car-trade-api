import express from 'express';
import { setupRoutes } from './routes';
import cors from 'cors';

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
setupRoutes(app);

export { app };
