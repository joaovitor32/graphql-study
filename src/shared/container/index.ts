
import  { container, InjectionToken } from 'tsyringe';

import IMongodbRepository from '@shared/infra/databases/mongodb/repository';
import MongodbRepository from '@shared/infra/databases/mongodb';

import IUserRepository from '@modules/users/repository/UserRepository';
import UserRepository from '@modules/users/infra/mongoose/repositories/UserRepository';

container.registerSingleton<IMongodbRepository>('MongodbRepository', MongodbRepository);
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);


