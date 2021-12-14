import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Channel } from './entities/channel.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Channel]),
    StudentModule
  ],
  controllers: [ChannelController],
  providers: [ChannelService]
})
export class ChannelModule {}
