import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTypeTransaction1718812509427 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO types_transaction (id, type)
            SELECT * FROM (
                SELECT '1' as id, 'compras' as type
                UNION ALL SELECT '2', 'cancelamento'
                UNION ALL SELECT '3', 'estorno'
                UNION ALL SELECT '4', 'adição de valores'
                UNION ALL SELECT '5', 'retirada de valores'
            ) AS new_types
            WHERE NOT EXISTS (
                SELECT 1 FROM types_transaction WHERE id = new_types.id
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
