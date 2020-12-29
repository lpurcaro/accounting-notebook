import { Router } from 'express';

import balanceRouter from './components/balance/routes';
import transactionsRouter from './components/transactions/routes';

const router = Router();

router.use('/', balanceRouter);
router.use('/transactions', transactionsRouter);

export default router
