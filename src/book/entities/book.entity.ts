import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("books")
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    writer: string;

    @Column()
    coverImage: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    point: number;

    @Column("simple-array")
    tag: string[];

    @Column({ default: false })
    completed: boolean;
}