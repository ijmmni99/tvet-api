import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel } from './entities/channel.entity';

@Injectable()
export class ChannelService {

  constructor(@InjectRepository(Channel) private channelRespository: Repository<Channel>) {}

  create(createChannelDto: CreateChannelDto): Promise<Channel> {
    const newChannel = this.channelRespository.create(createChannelDto);
    return this.channelRespository.save(newChannel);
  }

  findAll(): Promise<Channel[]> {
    return this.channelRespository.find();
  }

  async findOne(id: string): Promise<Channel> {
    try{
      const channel = await this.channelRespository.findOneOrFail(id); // SELECT * FROM Student WHERE Student.id = id;
      return channel;

    } catch (err){
      //handle error
      throw err;
    }
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
