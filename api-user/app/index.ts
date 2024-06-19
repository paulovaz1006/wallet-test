import { AppDataSource } from "../data-source"
import server from "./server";

AppDataSource.initialize().then(async () => {
  const port = process.env.PORT || 3003;
 
  server.listen(port, () => {
      console.log(`Run server api-user in http://localhost:${port}`)
  })
}).catch(error =>  console.log(`Error server: ${error}`));