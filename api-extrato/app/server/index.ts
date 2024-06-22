import express from "express";
import "dotenv";
import cors from 'cors';
import routers from "../routes/extract.router";
import kafkaMiddleware from "../midleware/kafkaMidleware";

const server = express();

server.use(cors())
server.use(express.json())
server.use(routers)
server.use(kafkaMiddleware);
export default server