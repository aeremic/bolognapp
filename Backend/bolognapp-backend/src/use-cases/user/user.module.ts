import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/services/implementations/models';
import { UserUseCases } from './user.use-case';
import { UserRepository } from 'src/services/implementations/repositories/repository-user';
import { UserRepositoryAbstract } from 'src/core/abstracts/repositories/repository-user.abstract';
import { UserController } from 'src/controllers/user.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [
        UserUseCases,
        {
            provide: UserRepositoryAbstract,
            useClass: UserRepository
        }
    ],
    controllers: [UserController]
})
export class UserModule { }