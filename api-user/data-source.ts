import "reflect-metadata"
import { DataSource } from "typeorm"
import UserEntity from "./app/entity/user.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "apiuser",
    password: "apiuser",
    // type: "sqlite",
    database: "user",
    // database: "./app/database/user.sqlite",
    entities: [UserEntity],
    synchronize: true   
})