import "reflect-metadata"
import { DataSource } from "typeorm"
import TestEntity from "./app/entity/Test.entity"

export const AppDataSource = new DataSource({
    type :"sqlite",
    database: "./app/database/test.sqlite",
    entities: [TestEntity],
    synchronize: true
})