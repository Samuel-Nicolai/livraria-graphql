const Category = require('./category')
const Book = require('./book')

module.exports = {
    ...Category,
    ...Book
}