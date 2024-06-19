import "reflect-metadata"
import { DataSource } from "typeorm"
import UserEntity from "./app/entity/user.entity"

export const AppDataSource = new DataSource({
    type :"sqlite",
    database: "./app/database/user.sqlite",
    entities: [UserEntity],
    synchronize: true
})