const db = require('../../../config/db')

module.exports = {
    books(category) {
        return db('bookdescriptions')
            .join(
                'bookcategoriesbooks',
                'bookdescriptions.ISBN',
                'bookcategoriesbooks.ISBN'
            )
            .where({
                CategoryID: category.CategoryID
            })
    }
}