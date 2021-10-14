import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto {
    @ApiProperty()
    studentId: number;

    @ApiProperty()
    nickname: string;
}
