import { Connection } from 'mongoose'

export default interface MongodbRepository{
    createMongoDBConnection:() => Connection
}