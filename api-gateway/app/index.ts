import swaggerDocs from "./configs/swagger";
import server from "./server";

const port = process.env.PORT || 3000;
const localhost = process.env.APILOCAL;

server.listen(port, () => {
    swaggerDocs(server, Number(port))
    console.log(`Run server api-gateway in http://${localhost}:${port}`)    
})
