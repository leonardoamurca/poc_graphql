const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const mongoose = require('mongoose')
const resolvers = require('./resolvers')

mongoose.connect('mongodb://localhost:27017/graphqlnode', {
    useNewUrlParser: true
})

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
})

server.start()