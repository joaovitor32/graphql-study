import { inject, injectable } from 'tsyringe'; 

import IMongodbRepository from 'shared/infra/databases/mongodb/repository'

import { UserSchema } from '../entities/User';
import CreateUserDTO from '@modules/users/dtos/CreateUser';

@injectable()
class UserRepository {
   private model
   
    constructor(
    @inject('MongodbRepository')
    private mongodbRepository: IMongodbRepository,
   ){
    this.model = this.mongodbRepository.createMongoDBConnection().model('users', UserSchema, 'users')
   }

    async createUser(data: CreateUserDTO) {
        const user = await new this.model(data)
        await user.save()
        return user
    }

    async getAllUsers() {
        return this.model.find()
    }

    async findUser(query = {}) {
        return this.model.find(query)
    }

    async updateUser(data:any) {
        const query = { _id: data._id }
        return this.model.updateOne(query, data)
    }

    async deleteUser(_id:string) {
        const query = { _id }
        return this.model.deleteOne(query)
    }
}

export default UserRepository