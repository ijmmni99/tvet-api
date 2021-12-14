import {MigrationInterface, QueryRunner} from "typeorm";

export class StudentChannelMigration1639483819442 implements MigrationInterface {
    name = 'StudentChannelMigration1639483819442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "channel_students_student" ("channelChannelID" nvarchar(255) NOT NULL, "studentStudentId" nvarchar(255) NOT NULL, CONSTRAINT "PK_bbc00a7f3d4c05277487f4d859d" PRIMARY KEY ("channelChannelID", "studentStudentId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0bf659e5343e091e7cf66e7099" ON "channel_students_student" ("channelChannelID") `);
        await queryRunner.query(`CREATE INDEX "IDX_aadb8a82ce0e3e43258ac849fe" ON "channel_students_student" ("studentStudentId") `);
        await queryRunner.query(`ALTER TABLE "channel_students_student" ADD CONSTRAINT "FK_0bf659e5343e091e7cf66e7099f" FOREIGN KEY ("channelChannelID") REFERENCES "channel"("channelID") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "channel_students_student" ADD CONSTRAINT "FK_aadb8a82ce0e3e43258ac849fe4" FOREIGN KEY ("studentStudentId") REFERENCES "student"("studentId") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "channel_students_student" DROP CONSTRAINT "FK_aadb8a82ce0e3e43258ac849fe4"`);
        await queryRunner.query(`ALTER TABLE "channel_students_student" DROP CONSTRAINT "FK_0bf659e5343e091e7cf66e7099f"`);
        await queryRunner.query(`DROP INDEX "IDX_aadb8a82ce0e3e43258ac849fe" ON "channel_students_student"`);
        await queryRunner.query(`DROP INDEX "IDX_0bf659e5343e091e7cf66e7099" ON "channel_students_student"`);
        await queryRunner.query(`DROP TABLE "channel_students_student"`);
    }

}
