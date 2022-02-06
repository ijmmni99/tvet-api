import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {

  constructor(@InjectRepository(Note) private noteRespository: Repository<Note>) {}

  create(createNoteDto: CreateNoteDto): Promise<Note> {
    const message = this.noteRespository.create(createNoteDto);
    return this.noteRespository.save(message);
  }

  findAll(): Promise<Note[]> {
    return this.noteRespository.find();
  }

  findAllbyIDStudent(note: Note): Promise<Note[]>{
    return this.noteRespository.find({where: { student: note.student, meetingid: note.meetingid}});
  }

  async findOne(id: string) : Promise<Note> {
    try{
      const message = await this.noteRespository.findOneOrFail(id); 
      return message;

    } catch (err){
      //handle error
      throw err;
    }
  }

  async exist(id: string) {
    try{
      const message = await this.noteRespository.findOne(id);

      if(message)
        return true;
      else
        return false;

    } catch (err) {
      return false;
    }
  }
    

  async update(id: string, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const message = await this.findOne(id);

    message.note = updateNoteDto.note;

    return this.noteRespository.save(message);
  }

  async remove(id: string): Promise<Note> {
    const message = await this.findOne(id);

    return this.noteRespository.remove(message);
  }
}
