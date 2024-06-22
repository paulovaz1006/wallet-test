import "reflect-metadata"
import { DataSource } from "typeorm"
import UserEntity from "./app/entity/user.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres_apiuser",
    port: 5432,
    username: "apiuser",
    password: "apiuser",
    database: "user",
    entities: [UserEntity],
    synchronize: true   
})