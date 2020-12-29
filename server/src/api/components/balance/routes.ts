import { Router } from 'express'

import { wrap } from '../../../utils/routes'
import {getAccountBalance} from './controller';

const router = Router();

router.get('/', wrap(getAccountBalance));

export default router
