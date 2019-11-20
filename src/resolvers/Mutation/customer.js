const db = require('../../../config/db')

const mutations = {
    async registerCustomer(_, { input }) {
        try {
            const [ custID ] = await db('bookcustomers')
                .insert(input)

            return db('bookcustomers')
                .where({ custID }).first()
        } catch(e) {
            throw new Error(`Não foi possível cadastrar usuário ${input.email}.`)
        }
    }
}

module.exports = mutations