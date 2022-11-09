import { DeleteResult } from '../infra/mongoose/entities/User'
import IUsersRepository from '../repository/UserRepository';

import { inject, injectable } from 'tsyringe'; 


@injectable()
class DeleteUserService {

    constructor(
        @inject('UserRepository')
        private usersRepository:IUsersRepository
    ){};

    public async execute(_id:string): Promise<DeleteResult> {
        return this.usersRepository.deleteUser(_id)
    }
}

export default DeleteUserService;