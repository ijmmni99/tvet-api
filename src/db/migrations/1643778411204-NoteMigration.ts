import {MigrationInterface, QueryRunner} from "typeorm";

export class NoteMigration1643778411204 implements MigrationInterface {
    name = 'NoteMigration1643778411204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "note" ("messageid" nvarchar(255) NOT NULL, "note" nvarchar(255) NOT NULL, CONSTRAINT "PK_c2e8c5e3e2290b0b2b67a64e2cc" PRIMARY KEY ("messageid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "note"`);
    }

}
