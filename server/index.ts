import * as dotenv from 'dotenv';
import app from './config/express';

dotenv.config();

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
    console.log('API Server started and listening on port ', port);
});

