import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Person } from '../persons/person.entity';

@Injectable()
export class CarReportsService {
    constructor(
        private readonly entityManager: EntityManager,
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,
    ) { }

    async getReport(): Promise<string> {
        const result = await this.entityManager.query(`
        SELECT car.name AS carName, person.name AS ownerName
        FROM car
        INNER JOIN person
        ON car.ownerId = person.id
        `);

        const stringResult = result.map((record: any) => {
            return `${record.ownerName}, ${record.carName}\n`;
        }).reduce((sum: string, line: string) => {
            return sum + line;
        }, '');

        return Promise.resolve(stringResult);
    }

    async getReportWithORM(): Promise<string> {
        const persons = await this.personRepository.find();

        let stringResult = '';
        for (const person of persons) {
            for (const car of person.cars) {
                stringResult += `${person.name}, ${car.name}\n`;
            }
        }

        return Promise.resolve(stringResult);
    }
}
