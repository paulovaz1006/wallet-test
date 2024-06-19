import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("accounts")
export default class AccountsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    balance: number;

    @Column()
    user_id: string;

    constructor(balance = 0) {
        Object.assign(this)
        this.balance = balance;
        this.id = uuid();

    }
}