import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question1sModule } from './question1s/question1s.module';
import { Question2sModule } from './question2s/question2s.module';
import { Question3sModule } from './question3s/question3s.module';
import { Question4sModule } from './question4s/question4s.module';
import { Question6sModule } from './question6s/question6s.module';
import { Question7sModule } from './question7s/question7s.module';
import { Question8sModule } from './question8s/question8s.module';
import { Question9sModule } from './question9s/question9s.module';
import { Question10sModule } from './question10s/question10s.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    Question1sModule,
    Question2sModule,
    Question3sModule,
    Question4sModule,
    Question6sModule,
    Question7sModule,
    Question8sModule,
    Question9sModule,
    Question10sModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
