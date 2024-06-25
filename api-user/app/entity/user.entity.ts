import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("user")
export default class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    cnpj: number;

    constructor() {
        this.id = uuid();
    }
}
