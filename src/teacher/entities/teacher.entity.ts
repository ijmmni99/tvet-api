import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    teacherId: number;

    @Column()
    nickname: string;
}
