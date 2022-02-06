import {MigrationInterface, QueryRunner} from "typeorm";

export class NoteUpdateMigration1643780808817 implements MigrationInterface {
    name = 'NoteUpdateMigration1643780808817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note" ADD "meetingid" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "note" ADD "studentid" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_9893372c1fd05b0dfaaadba8b43" FOREIGN KEY ("studentid") REFERENCES "student"("studentId") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_9893372c1fd05b0dfaaadba8b43"`);
        await queryRunner.query(`ALTER TABLE "note" DROP COLUMN "studentid"`);
        await queryRunner.query(`ALTER TABLE "note" DROP COLUMN "meetingid"`);
    }

}
