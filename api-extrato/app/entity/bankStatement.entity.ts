import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import TypeTransactions from "./typeTransactions.entity";

@Entity("bank_statement")
export default class BankStatementEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    amount: number;

    @Column()
    description: string;

    @Column()
    date: Date;

    @Column()
    user_id: string;

    @ManyToOne(() => TypeTransactions, typeTransaction => typeTransaction.bankStatements)
    typeTransaction: TypeTransactions;

    constructor(date = new Date(), description = "Not informed") {
        this.id = uuid();
        this.date = date;
        this.description = description;
    }
}
