import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity()
export default class AccountsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    balance: number;

    @Column()
    user_id: string;

    constructor(balance = 0) {
        this.balance = balance;
        this.id = uuid();
    }
}