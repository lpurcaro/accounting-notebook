import { Router } from 'express'

import { getTransactions, addTransaction, getTransactionById } from './controller'
import { wrap } from '../../../utils/routes'

const router = Router();

router.get('/', wrap(getTransactions));
router.post('/', wrap(addTransaction));
router.get('/:transactionId', wrap(getTransactionById));

export default router
