import { Channel } from "src/channel/entities/channel.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
    @PrimaryColumn()
    teacherId: string;

    @Column()
    name: string;

    @OneToMany(() => Channel, (Channel) => 
        Channel.lecturerID, {onUpdate: 'CASCADE', onDelete: 'CASCADE'})
        channels: Channel[];
}
