import { AppDataSource } from "../data-source"
import swaggerDocs from "./configs/swagger";
import server from "./server";

AppDataSource.initialize().then(async () => {
  const port = process.env.PORT || 3001;
  
  server.listen(port, () => {
    swaggerDocs(server, Number(port))
    console.log(`Run server api-saldo in http://localhost:${port}`)
  })
}).catch(error =>  console.log(`Error server: ${error}`));