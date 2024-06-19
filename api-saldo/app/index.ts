import { AppDataSource } from "./configs/database/data-source"
import server from "./server";

AppDataSource.initialize().then(async () => {
  const port = process.env.PORT || 3001;
  
  server.listen(port, () => {
      console.log(`Run server api-saldo in http://localhost:${port}`)
  })
}).catch(error =>  console.log(`Error server: ${error}`));