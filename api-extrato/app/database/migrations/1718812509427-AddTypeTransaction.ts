import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTypeTransaction1718812509427 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO types_transaction (id, type) values
            ('1', 'compras'),
            ('2', 'cancelamento'),
            ('3', 'estorno'),
            ('4', 'adição de valores'),
            ('5', 'retirada de valores')
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`TRUNCATE TABLE types_transaction`)
    }

}
