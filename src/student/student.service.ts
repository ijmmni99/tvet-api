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

  async findOne(id: string) : Promise<Student> {
    try{
      const student = await this.studentRespository.findOneOrFail(id); // SELECT * FROM Student WHERE Student.id = id;
      return student;

    } catch (err){
      //handle error
      throw err;
    }
  }

  async exist(id: string) {
    try{
      const student = await this.studentRespository.findOne(id);

      if(student)
        return true;
      else
        return false;

    } catch (err) {
      return false;
    }
  }
    

  async update(id: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.findOne(id);

    student.name = updateStudentDto.name;

    return this.studentRespository.save(student);
  }

  async remove(id: string): Promise<Student> {
    const student = await this.findOne(id);

    return this.studentRespository.remove(student);
  }
}
