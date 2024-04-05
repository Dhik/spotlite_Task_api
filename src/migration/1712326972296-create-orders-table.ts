import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrdersTable1712326972296 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE orders (
                id SERIAL PRIMARY KEY,
                book_name VARCHAR NOT NULL,
                quantity INT NOT NULL,
                customer_name VARCHAR NOT NULL,
                customer_email VARCHAR NOT NULL,
                status VARCHAR DEFAULT 'pending',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE orders;`);
    }

}
