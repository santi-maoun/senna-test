import { MigrationInterface, QueryRunner, Repository } from 'typeorm';
import { Person } from '../src/question6s/persons/person.entity';
import { Car } from '../src/question6s/cars/car.entity';

export class q61566995193832 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const personRepository = queryRunner.manager.getRepository(Person);
        const carRepository = queryRunner.manager.getRepository(Car);

        const rick = new Person();
        rick.name = 'Rick';
        await personRepository.save(rick);
        this.createCarsByName(['Corvette Z06', 'Lotus Exige S', 'BMW M3'], rick, carRepository);

        const john = new Person();
        john.name = 'John';
        await personRepository.save(john);
        this.createCarsByName(['BMW 320d', 'Mercedes SLK AMG'], john, carRepository);

        const zing = new Person();
        zing.name = 'Zing';
        await personRepository.save(zing);
        this.createCarsByName(['Toyota Alphard', 'Mercedes Sprinter'], zing, carRepository);

        const nan = new Person();
        nan.name = 'Nan';
        await personRepository.save(nan);
        this.createCarsByName(['Toyota Camry', 'BMW M5', 'Porsche 911', 'Jaguar', 'TukTuk', 'Mini Cooper', 'Honda Jazz'], nan, carRepository);
    }

    async createCarsByName(names: string[], owner: Person, repository: Repository<Car>) {
        for (const name of names) {
            const car = new Car();
            car.name = name;
            car.owner = owner;

            await repository.save(car);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
