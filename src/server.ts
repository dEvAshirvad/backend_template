import express from 'express';
import serverConfig from './serverConfig';
import connectDB from './configs/DB';
import { errorlogger, fatalLogger, logger } from './configs/logger';
import { PORT, SERVER_URL } from './constants/server.constants';

const app = express();

serverConfig(app);

connectDB()
  .then(() => {
    logger.info('Running Status', 'Database connected');
  })
  .catch((err) => {
    errorlogger.error('Database Connection Failed', err);
    process.exit();
  });

const server = app.listen(PORT, () => {
  logger.info('Running Status', `Server started on port ${SERVER_URL}`);
});

process.on('unhandledRejection', (err) => {
  fatalLogger.fatal('Unhandled rejection', err);
  server.close(() => process.exit(1));
});
