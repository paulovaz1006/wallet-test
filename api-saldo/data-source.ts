import "reflect-metadata"
import { DataSource } from "typeorm"
import AccountsEntity from "./app/entity/Accounts.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres_apisaldo",
    port: 5433,
    username: "apisaldo",
    password: "apisaldo",
    database: "saldo",
    entities: [AccountsEntity],
    synchronize: true   
})