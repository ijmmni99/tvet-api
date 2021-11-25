import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryColumn()
    studentId: string;

    @Column()
    name: string;
}
