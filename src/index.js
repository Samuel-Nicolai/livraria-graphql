require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')

const schemaPath = `src/schema/index.graphql`
const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers,
    tracing: true
})

server.listen().then(({url}) => {
    console.log(`Listening in ${url} 🚀️`)
})