const db = require('../../../config/db')

module.exports = {
    categories() {
        return db('bookcategories')
    },
    category(_, { id }) {
        return db('bookcategories')
            .where({
                CategoryID: id
            })
            .first()
    }
}