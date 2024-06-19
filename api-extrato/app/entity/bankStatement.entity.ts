import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import TypeTransactions from "./typeTransactions.entity";

@Entity("bank_statement")
export default class BankStatementEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'float' })
    amount: number;

    @Column()
    description: string;

    @Column()
    date: Date;

    @Column()
    user_id: string;

    @ManyToOne(() => TypeTransactions, typeTransaction => typeTransaction.bank_statements)
    type_transaction_id: TypeTransactions;

    constructor(date = new Date(), description = "Not informed") {
        this.id = uuid();
        this.date = date;
        this.description = description;
    }
}
