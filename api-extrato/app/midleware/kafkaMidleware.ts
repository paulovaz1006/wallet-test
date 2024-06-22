import createConsumer from "../service/kafka";

function kafkaMiddleware(req, res, next) {
  if (!req.app.locals.kafkaConsumer) {
    req.app.locals.kafkaConsumer = createConsumer();
    console.log('Kafka consumer started');
  }
  next();
}

export default kafkaMiddleware;