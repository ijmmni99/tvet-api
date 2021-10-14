import {MigrationInterface, QueryRunner} from "typeorm";

export class StudentMigration1634217693218 implements MigrationInterface {
    name = 'StudentMigration1634217693218'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student" ("studentId" int NOT NULL IDENTITY(1,1), "nickname" nvarchar(255) NOT NULL, CONSTRAINT "PK_9316abc534487368cfd8527e8df" PRIMARY KEY ("studentId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
