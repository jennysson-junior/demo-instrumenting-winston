const { trace, context } = require('@opentelemetry/api');

const winston = require('winston');
const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
});

const app = require('express')();

app.get('/', (req, res) => {
  logger.info('Should have trace id because auto instrumentation is enabled and have an active span about request');
  res.send('Ok!');
})

app.listen(3000, () => {
  logger.info('Server is running on http://localhost:3000 and havent trace id because there isnt active span');
});