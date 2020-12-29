import express from 'express';
import cors from 'cors';

import apiRoutes from '../api/routes'
import { errorHandler } from '../errors/serverErrors'

const app = express();

app.use(cors());

app.use(express.static(process.cwd() + '/client/build'));
app.use(express.static(process.cwd() + '/client/public'));

app.use(express.json());

app.use('/api', apiRoutes);

app.use(errorHandler);

export default app;
