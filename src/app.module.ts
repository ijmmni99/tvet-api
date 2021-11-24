import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from 'ormconfig';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    StudentModule,
    TeacherModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
