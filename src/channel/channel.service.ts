import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Repository } from 'typeorm';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel } from './entities/channel.entity';
import { StudentService} from './../student/student.service';
import { Student } from 'src/student/entities/student.entity';
import { TeacherService } from 'src/teacher/teacher.service';

@Injectable()
export class ChannelService {

  constructor(@InjectRepository(Channel) private channelRespository: Repository<Channel>, private studentService: StudentService, private teacherService: TeacherService) {}

  async create(createChannelDto: CreateChannelDto): Promise<Channel> {

    let teacherData = await this.teacherService.exist(createChannelDto.lecturerID.teacherId);

    if(!teacherData){
      await this.teacherService.create(createChannelDto.lecturerID);
    }

    createChannelDto.students.forEach(async (element) => {
      let data = await this.studentService.exist(element.studentId);

      if(!data)
      {
        await this.studentService.create(element);
      }
    })
    
    const newChannel = this.channelRespository.create(createChannelDto);
    return this.channelRespository.save(newChannel); 
  }

  async updateChannel(updateChannelDto: UpdateChannelDto): Promise<Channel> {
    
    updateChannelDto.students.forEach(async (element) => {
      let data = await this.studentService.exist(element.studentId);

      if(!data)
      {
        await this.studentService.create(element);
      }
    })
    return this.channelRespository.save(updateChannelDto);
  }

  findAll(): Promise<Channel[]> {
    return this.channelRespository.find({relations: ["students"]});
  }

  findAllbyID(id: Teacher): Promise<Channel[]> {
    return this.channelRespository.find({where: { lecturerID: id}, relations: ["students"]});
  }

  findAllbyIDStudent(student: Student): Promise<Channel[]> {
    return this.channelRespository.createQueryBuilder('channel')
      .leftJoinAndSelect('channel.students', 'channel_students')
      .where("channel_students.studentId = :id", {id: student.studentId})
      .getMany();
    //return this.channelRespository.find({where: { students: id}});
  }

  findOne(id: string): Promise<Channel> {
    return this.channelRespository.findOne({where: {channelID: id,}, relations: ["students"]})
  }

  async update(id: string, updateChannelDto: UpdateChannelDto): Promise<Channel> {
    const channel = await this.findOne(id);

    return this.channelRespository.save(channel);
  }

  async remove(id: string): Promise<Channel> {
    const channel = await this.findOne(id);

    return this.channelRespository.remove(channel);
    
  }
}
