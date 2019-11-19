const db = require('../../../config/db')

module.exports = {
    authors() {
        return db('bookauthors')
            .orderBy('nameF')
    },
    author(_, { id }) {
        return db('bookauthors')
            .where({
                AuthorID: id
            })
            .first()
    }
}