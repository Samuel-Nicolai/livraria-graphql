const Category = require('./category')
const Book = require('./book')
const Author = require('./author')

module.exports = {
    ...Category,
    ...Book,
    ...Author
}