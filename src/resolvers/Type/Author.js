const db = require('../../../config/db')

module.exports = {
    books(author) {
        return db('bookdescriptions')
            .join(
                'bookauthorsbooks',
                'bookdescriptions.ISBN',
                'bookauthorsbooks.ISBN'
            )
            .where({
                AuthorID: author.AuthorID
            })
    }
}