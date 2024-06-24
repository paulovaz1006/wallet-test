import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import routers from "../routes/user.router";

const server = express();

dotenv.config()
server.use(cors())
server.use(express.json())
server.use(routers)

export default server