import { ApiProperty } from "@nestjs/swagger";

export class CreateTeacherDto {
    @ApiProperty()
    teacherId: number;

    @ApiProperty()
    nickname: string;
}

