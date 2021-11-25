import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto {
    @ApiProperty()
    studentId: string;

    @ApiProperty()
    name: string;
}
