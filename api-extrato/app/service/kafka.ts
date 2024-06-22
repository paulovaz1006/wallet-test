const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: 'kafka:9092' });

function createConsumer() {
  const consumer = new kafka.Consumer(
    client,
    [{ topic: 'bankStatement', partition: 0 }],
    { autoCommit: true }
  );

  consumer.on('message', (message) => {
    console.log('Received message:', message);
  });

  consumer.on('error', (err) => {
    console.error('Consumer error:', err);
  });

  return consumer;
}

export default createConsumer;
