import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBooksTable1712209080800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE books (
            id bigserial PRIMARY KEY,
            title text,
            writer text,
            cover_image text,
            point numeric,
            tag text[]
        );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE books;`);
    }

}
