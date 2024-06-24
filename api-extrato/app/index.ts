import { AppDataSource } from "../data-source"
import swaggerDocs from "./configs/swagger";
import server from "./server";
import createConsumer from "./service/kafka";

AppDataSource.initialize().then(async () => {
  const port = process.env.PORT || 3002;
  const locahost = process.env.APILOCAL
  server.listen(port, () => {
    swaggerDocs(server, Number(port))
    console.log(`Run server api-extrato in http://${locahost}:${port}`)
  })
}).catch(error =>  console.log(`Error server: ${error}`));