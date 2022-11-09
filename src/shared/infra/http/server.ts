/* eslint-disable no-unused-vars */
import 'reflect-metadata';

import "dotenv/config";

import { ApolloServer } from 'apollo-server'

import  typeDefs from './definition-types'

import UserResolvers from '@modules/users/infra/http/resolvers/user.resolver';

import '@shared/container';

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        ...UserResolvers
    }
})

server.listen().then(({ url })=>{
    console.log(`Server rodando em ${url}`)
})