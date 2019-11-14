const db = require('../../../config/db')

module.exports = {
    books() {
        return db('bookdescriptions')
            .orderBy('title')
    },
    book(_, { id }) {
        return db('bookdescriptions')
            .where({
                ISBN: id
            })
            .first()
    }
}