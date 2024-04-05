import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBuysTable1712326589142 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE buys (
                id SERIAL PRIMARY KEY,
                book_name VARCHAR NOT NULL,
                quantity INT NOT NULL,
                buyer_name VARCHAR NOT NULL,
                buyer_email VARCHAR NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                transaction_date DATE NOT NULL,
                payment_method VARCHAR NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE buys;`);
    }

}
