import { Student } from "src/student/entities/student.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Channel {

    @PrimaryColumn({unique: true})
    channelID: string;

    @Column()
    teamsID: string;

    @Column()
    subjectCode: string;

    @Column()
    subjectName: string;

    @ManyToOne(() => Teacher, (Teacher) => 
        Teacher.teacherId, { onUpdate: 'CASCADE', onDelete: 'CASCADE'})
    @JoinColumn({name: 'lecturerID'})
    lecturerID: Teacher;

    @ManyToMany(() => Student)
    @JoinTable()
    students: Student[];
}
