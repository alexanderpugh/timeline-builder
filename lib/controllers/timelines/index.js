import { Router } from 'express';

import * as controller from './controller';
import fileupload from '../../config/fileupload';

const router = Router();
const base = '/timelines';

router.get('/', (req, res, next) => {
  controller.fetchAll({ req, res, next });
});

router.get('/:id', (req, res, next) => {
  controller.fetchSingle({ req, res, next });
});

router.post('/:id', (req, res, next) => {
  controller.createEntry({ req, res, next });
});

router.post('/', (req, res, next) => {
  controller.createTimeline({ req, res, next });
});

/** Form submit fallbacks for when there is no client js */
router.post('/submit', fileupload, (req, res, next) => {
  controller.createTimelineFormAction({ req, res, next });
});

export default {
  base,
  router
};
