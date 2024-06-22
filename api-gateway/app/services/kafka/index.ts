import kafka from "kafka-node";

async function sendProducer(payloadToBankStatement: any) {
  const Producer = kafka.Producer;
  const client = new kafka.KafkaClient({ kafkaHost: 'kafka:9092' });
  const producer = new Producer(client);

  const payloads = [
    { topic: 'bankStatement', messages: payloadToBankStatement, partition: 0 }
  ];

  producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
      if (err) {
        console.error('Error sending message to Kafka:', err);
      } else {
        console.log('Message sent successfully:', data);
      }
      process.exit();
    });
  });

  producer.on('error', function (err) {
    console.error('Producer error:', err);
  });
}
export default sendProducer;