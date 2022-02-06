import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from 'ormconfig';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { ChannelModule } from './channel/channel.module';
import { NoteModule } from './note/note.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    StudentModule,
    TeacherModule,
    ChannelModule,
    NoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
