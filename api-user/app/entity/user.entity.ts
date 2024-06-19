import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("user")
export default class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: number;

    constructor() {
        this.id = uuid();
    }
}
