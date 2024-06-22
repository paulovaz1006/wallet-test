import "reflect-metadata"
import { DataSource } from "typeorm"
import AccountsEntity from "./app/entity/Accounts.entity"

export const AppDataSource = new DataSource({
    // type: "postgres",
    // port: 5433,
    // username: "apisaldo",
    // password: "apisaldo",
    // database: "saldo",
    // host: "localhost",
    type: "sqlite",
    database: "./app/database/balance.sqlite",
    entities: [AccountsEntity],
    synchronize: true   
})