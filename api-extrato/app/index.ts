import { AppDataSource } from "../data-source"
import server from "./server";

AppDataSource.initialize().then(async () => {
  const port = process.env.PORT || 3002;
 
  server.listen(port, () => {
      console.log(`Run server in port ${port}`)
  })
}).catch(error =>  console.log(`Error server: ${error}`));