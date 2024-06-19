import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import BankStatement from "./bankStatement.entity";

@Entity("types_transaction")
export default class TypeTransactionsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: string;

    @OneToMany(() => BankStatement, bankStatement => bankStatement.typeTransaction)
    bankStatements: BankStatement[];
}
