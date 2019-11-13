const db = require('../../../config/db')

module.exports = {
    books() {
        return db('bookdescriptions')
            .orderBy('title')
    }
}