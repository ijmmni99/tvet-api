import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Crud } from '@nestjsx/crud';
import { Student } from 'src/student/entities/student.entity';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Post('create')
  async create(@Body() createChannelDto: CreateChannelDto) {
    return this.channelService.create(createChannelDto);
  }

  @Post('update')
  async updateChannel(@Body() updateChannelDto: UpdateChannelDto) {
    return this.channelService.updateChannel(updateChannelDto);
  }

  @Post('lecturer')
  findAllbyID(@Body() teacher: Teacher) {
    return this.channelService.findAllbyID(teacher);
  }

  @Post('student')
  findAllbyIDStudent(@Body() student: Student) {
    return this.channelService.findAllbyIDStudent(student);
  }

  @Get()
  findAll() {
    return this.channelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.channelService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChannelDto: UpdateChannelDto) {
    return this.channelService.update(id, updateChannelDto);
  }

  @Delete(':id') 
  remove(@Param('id') id: string) {
    return this.channelService.remove(id);
  }
}
