import { Router } from 'express';
import path from 'path';

import * as controller from './controller';
import fileupload from '../../config/fileupload';

const router = Router();
const base = '/utils';

router.post('/file', fileupload, (req, res, next) => {
  controller.fileupload({ req, res, next });
});

export default {
  base,
  router
};
