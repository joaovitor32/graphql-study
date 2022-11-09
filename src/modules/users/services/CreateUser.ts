import { User } from '../infra/mongoose/entities/User';

//import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repository/UserRepository';

import { inject, injectable } from 'tsyringe'; 

import CreateUserDTO from '../dtos/CreateUser';

@injectable()
class CreateUserService {

    constructor(
        @inject('UserRepository')
        private usersRepository:IUsersRepository
    ){};

    public async execute({ name, email }: CreateUserDTO): Promise<User> {

        const user = await this.usersRepository.createUser({
            name,
            email,
        });

        return user;
    }
}

export default CreateUserService;