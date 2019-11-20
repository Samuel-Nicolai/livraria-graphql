const Query = require('./Query')
const Mutation = require('./Mutation')

const Category = require('./Type/Category')
const Book = require('./Type/Book')
const Author = require('./Type/Author')

module.exports = {
    Query,
    Mutation,

    Category,
    Book,
    Author
}