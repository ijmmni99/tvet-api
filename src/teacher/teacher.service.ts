import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {

  constructor(@InjectRepository(Teacher) private teacherRespository: Repository<Teacher>) {}

  create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const newStudent = this.teacherRespository.create(createTeacherDto);
    return this.teacherRespository.save(newStudent);
  }

  findAll(): Promise<Teacher[]> {
    return this.teacherRespository.find(); // SELECT * FROM Student;
  }

  async findOne(id: number) : Promise<Teacher> {
    try{
      const student = await this.teacherRespository.findOneOrFail(id); // SELECT * FROM Student WHERE Student.id = id;
      return student;

    } catch (err){
      //handle error
      throw err;
    }
  } 
    

  async update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
    const teacher = await this.findOne(id);

    teacher.nickname = updateTeacherDto.nickname;

    return this.teacherRespository.save(teacher);
  }

  async remove(id: number): Promise<Teacher> {
    const teacher = await this.findOne(id);

    return this.teacherRespository.remove(teacher);
  }
}
