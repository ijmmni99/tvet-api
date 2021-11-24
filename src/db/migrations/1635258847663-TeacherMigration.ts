import {MigrationInterface, QueryRunner} from "typeorm";

export class TeacherMigration1635258847663 implements MigrationInterface {
    name = 'TeacherMigration1635258847663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher" ("teacherId" int NOT NULL IDENTITY(1,1), "nickname" nvarchar(255) NOT NULL, CONSTRAINT "PK_5e88d094d0152870a9eb4804aa9" PRIMARY KEY ("teacherId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "teacher"`);
    }

}
