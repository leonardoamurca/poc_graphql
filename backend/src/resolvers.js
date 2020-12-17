const users = [
    { id: 1, name: 'Leonardo', email: 'leonardo@gmail.com'},
    { id: 2, name: 'Cristiane', email: 'cristiane@gmail.com'}
]

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        createUser: () => users[0]
    }
}