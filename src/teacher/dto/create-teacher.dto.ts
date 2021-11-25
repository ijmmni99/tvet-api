import { ApiProperty } from "@nestjs/swagger";
import { Channel } from "src/channel/entities/channel.entity";

export class CreateTeacherDto {
    @ApiProperty()
    teacherId: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    channels: Channel[];
}

