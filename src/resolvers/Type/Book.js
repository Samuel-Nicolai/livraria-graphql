const db = require('../../../config/db')

module.exports = {
    categories(book) {
        return db('bookcategories')
            .join(
                'bookcategoriesbooks',
                'bookcategories.CategoryID',
                'bookcategoriesbooks.CategoryID'
            )
            .where({
                ISBN: book.ISBN
            })
    }
}