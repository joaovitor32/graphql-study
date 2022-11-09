import CreateUser from '@modules/users/dtos/CreateUser'
import DeleteUser from '@modules/users/dtos/DeleteUser'

import CreateUserService from '@modules/users/services/CreateUser'
import GetAllUserService from '@modules/users/services/GetAllUserService'
import FindUserService from '@modules/users/services/FindUserService'
import UpdateUserService from '@modules/users/services/UpdateUserService'
import DeleteUserService from '@modules/users/services/DeleteUserService'

import { container } from 'tsyringe';

const UserResolvers = {
    Query: {
       users: () => {
        const getAllUserService = container.resolve(GetAllUserService)
        return getAllUserService.execute()
       },
       user: async (_:any, query:any) => {
        const findUserService = container.resolve(FindUserService)
        return findUserService.execute(query)
       }
    },
    Mutation: {
        createUser: async (_:any, { name, email }: CreateUser) => {
            const createUserService = container.resolve(CreateUserService);
            return createUserService.execute({ name, email })
        },
        updateUser: async (_: any, args: any) => {
            const updateUserService = container.resolve(UpdateUserService)
            return updateUserService.execute(args)
        },
        deleteUser: async (_:any, { _id }: DeleteUser) => {
            const deleteUserService = container.resolve(DeleteUserService)
            return deleteUserService.execute(_id)
        }
    }
}

export default UserResolvers