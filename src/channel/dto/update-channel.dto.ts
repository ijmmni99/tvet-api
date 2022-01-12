import { PartialType } from '@nestjs/swagger';
import { CreateChannelDto } from './create-channel.dto';
import { ApiProperty } from "@nestjs/swagger";
import { Student } from "src/student/entities/student.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";

export class UpdateChannelDto extends PartialType(CreateChannelDto) {

    @ApiProperty()
    channelID: string;

    @ApiProperty()
    teamsID: string;

    @ApiProperty()
    subjectCode: string;

    @ApiProperty()
    subjectName: string;

    @ApiProperty()
    lecturerID: Teacher;

    @ApiProperty()
    students: Student[];
}
