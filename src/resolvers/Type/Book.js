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
    },
    authors(book) {
        return db('bookauthors')
            .join(
                'bookauthorsbooks',
                'bookauthors.AuthorID',
                'bookauthorsbooks.AuthorID'
            )
            .where({
                ISBN: book.ISBN
            })
    }
}