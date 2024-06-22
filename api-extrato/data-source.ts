import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres_apiextrato",
    port: 5434,
    username: "apiextrato",
    password: "apiextrato",
    database: "extrato",
    entities: ["./app/entity/*.ts"],
    migrations: ["./app/database/migrations/*.ts"],
    synchronize: true
})