
import { Student } from "src/student/entities/student.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Note {
    @PrimaryColumn()
    messageid: string;

    @Column()
    note: string;

    @Column()
    meetingid: string;

    @ManyToOne(() => Student, (Student) => 
        Student.studentId, { onUpdate: 'CASCADE', onDelete: 'CASCADE'})
    @JoinColumn({name: 'studentid'})
    student: Student;
}
