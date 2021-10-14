import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {

  constructor(@InjectRepository(Student) private studentRespository: Repository<Student>) {}
  
  create(createStudentDto: CreateStudentDto): Promise<Student> {
    const newStudent = this.studentRespository.create(createStudentDto);
    return this.studentRespository.save(newStudent);
  }

  findAll(): Promise<Student[]> {
    return this.studentRespository.find(); // SELECT * FROM Student;
  }

  async findOne(id: number) : Promise<Student> {
    try{
      const student = await this.studentRespository.findOneOrFail(id); // SELECT * FROM Student WHERE Student.id = id;
      return student;

    } catch (err){
      //handle error
      throw err;
    }
  } 
    

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.findOne(id);

    student.nickname = updateStudentDto.nickname;

    return this.studentRespository.save(student);
  }

  async remove(id: number): Promise<Student> {
    const student = await this.findOne(id);

    return this.studentRespository.remove(student);
  }
}
