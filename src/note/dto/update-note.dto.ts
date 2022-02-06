import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Student } from 'src/student/entities/student.entity';
import { Column, PrimaryColumn } from 'typeorm';
import { CreateNoteDto } from './create-note.dto';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
    @ApiProperty()
    messageid: string;

    @ApiProperty()
    note: string;

    @ApiProperty()
    meetingid: string;

    @ApiProperty()
    student: Student;
}
