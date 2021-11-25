import {MigrationInterface, QueryRunner} from "typeorm";

export class LatestMigration1637849861935 implements MigrationInterface {
    name = 'LatestMigration1637849861935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher" ("teacherId" nvarchar(255) NOT NULL, "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_5e88d094d0152870a9eb4804aa9" PRIMARY KEY ("teacherId"))`);
        await queryRunner.query(`CREATE TABLE "channel" ("channelID" nvarchar(255) NOT NULL, "teamsID" nvarchar(255) NOT NULL, "subjectCode" nvarchar(255) NOT NULL, "subjectName" nvarchar(255) NOT NULL, "lecturerID" nvarchar(255), CONSTRAINT "PK_db0852a4e2363d381ed9ff199dc" PRIMARY KEY ("channelID"))`);
        await queryRunner.query(`CREATE TABLE "student" ("studentId" nvarchar(255) NOT NULL, "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_9316abc534487368cfd8527e8df" PRIMARY KEY ("studentId"))`);
        await queryRunner.query(`ALTER TABLE "channel" ADD CONSTRAINT "FK_d359fc781cdda7f929ca2903e94" FOREIGN KEY ("lecturerID") REFERENCES "teacher"("teacherId") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "channel" DROP CONSTRAINT "FK_d359fc781cdda7f929ca2903e94"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "channel"`);
        await queryRunner.query(`DROP TABLE "teacher"`);
    }

}
