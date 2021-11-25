import { ApiProperty } from "@nestjs/swagger";
import { Teacher } from "src/teacher/entities/teacher.entity";

export class CreateChannelDto {

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
}
