import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Person } from '../persons/person.entity';

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Person, person => person.cars, { eager: false })
    owner: Person;

    @Column({ length: 255 })
    name: string;
}
