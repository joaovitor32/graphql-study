import CreateUserDTO from "../dtos/CreateUser";

import { User, UpdateResult, DeleteResult } from '../infra/mongoose/entities/User'

export default interface UserRepository{
    createUser(data:CreateUserDTO):Promise<User>
    getAllUsers():Promise<User[]>
    findUser(query:any):Promise<User[]>
    updateUser(data:any):Promise<UpdateResult>
    deleteUser(id:string):Promise<DeleteResult>
}