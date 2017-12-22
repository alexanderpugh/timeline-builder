import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import compression from 'compression';
import session from 'express-session';

import corsMiddleware from './middleware/cors.middleware';
import utilsController from './controllers/utilities';
import timelinesController from './controllers/timelines';
import universal from './universal';

const app = express();
const port = 8080;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', 1);
app.use(session({
  secret: 'session secret',
  resave: true
}));

app.use(corsMiddleware);
app.use(express.static(path.resolve(__dirname, '../assets/')));
app.use(`/api${utilsController.base}`, utilsController.router);
app.use(`/api${timelinesController.base}`, timelinesController.router);
app.use('/', universal);

app.listen(port, () => {
  console.log(`Starting the server on port ${port}`);
});
