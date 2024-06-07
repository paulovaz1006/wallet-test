import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity()
export default class TestEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    test: string;

    constructor(test: string = "Test not informed",) {
        this.test = test;
        this.id = uuid();
    }
}