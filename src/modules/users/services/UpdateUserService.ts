import { UpdateResult } from '../infra/mongoose/entities/User';

import AppError from '@errors/AppError';
import IUsersRepository from '../repository/UserRepository';

import { inject, injectable } from 'tsyringe'; 

@injectable()
class UpdateUserService {

    constructor(
        @inject('UserRepository')
        private usersRepository:IUsersRepository
    ){};

    public async execute({ name, email, _id }: any): Promise<UpdateResult> {

        if(!_id) {
            throw new AppError('Nenhum paramêtro _id passado');
        }
        
        const user = await this.usersRepository.updateUser({
            _id,
            name,
            email,
        });

        return user;
    }
}

export default UpdateUserService;