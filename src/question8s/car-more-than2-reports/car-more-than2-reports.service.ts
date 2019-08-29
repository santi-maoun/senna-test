import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Person } from '../../question6s/persons/person.entity';

@Injectable()
export class CarMoreThan2ReportsService {
    constructor(
        private readonly entityManager: EntityManager,
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,
    ) { }

    async getReport(): Promise<string> {
        const result = await this.entityManager.query(`
        SELECT COUNT(car.id) AS own, person.name AS ownerName
        FROM car
        INNER JOIN person
        ON car.ownerId = person.id
        GROUP BY person.name
        HAVING own > 2
        `);

        const stringResult = result.map((record: any) => {
            return `${record.ownerName}, ${record.own}\n`;
        }).reduce((sum: string, line: string) => {
            return sum + line;
        }, '');

        return Promise.resolve(stringResult);
    }

    async getReportWithORM(): Promise<string> {
        /*
        Repository API doesn't seem good here.
        Alternative way is to use QueryBuilder.
        */

        const persons = await this.personRepository.find();

        let stringResult = '';
        for (const person of persons) {
            if (person.cars.length > 2) {
                stringResult += `${person.name}, ${person.cars.length}\n`;
            }
        }

        return Promise.resolve(stringResult);
    }
}
