import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./app/database/bank_statement.sqlite",
    entities: ["./app/entity/*.ts"],
    migrations: ["./app/database/migrations/*.ts"],
    synchronize: true
})