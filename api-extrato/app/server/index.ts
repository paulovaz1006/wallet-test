import express from "express";
import "dotenv";
import cors from 'cors';
import routers from "../routes/test.router";

const server = express();

server.use(cors())
server.use(express.json())
server.use(routers)

export default server