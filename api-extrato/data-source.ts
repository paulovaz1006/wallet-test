import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    // type: "postgres",
    // host: "localhost",
    // port: 5434,
    // username: "apiextrato",
    // password: "apiextrato",
    type: "sqlite",
    database: "./app/database/bank_statement.sqlite",
    // database: "extrato",
    entities: ["./app/entity/*.ts"],
    migrations: ["./app/database/migrations/*.ts"],
    synchronize: true
})