import { User } from '../infra/mongoose/entities/User';

//import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repository/UserRepository';

import { inject, injectable } from 'tsyringe'; 

@injectable()
class GetAllUserService {

    constructor(
        @inject('UserRepository')
        private usersRepository:IUsersRepository
    ){};

    public async execute(): Promise<User[]> {

        const user = await this.usersRepository.getAllUsers()

        return user;
    }
}

export default GetAllUserService;