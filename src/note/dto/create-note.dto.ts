import { ApiProperty } from "@nestjs/swagger";
import { Student } from "src/student/entities/student.entity";
import { Column, PrimaryColumn } from "typeorm";

export class CreateNoteDto {
    @ApiProperty()
    messageid: string;

    @ApiProperty()
    note: string;

    @ApiProperty()
    meetingid: string;

    @ApiProperty()
    student: Student;
}
