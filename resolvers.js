module.exports = { 

Mutation: {
    signupUser: async(_, { username, password }, { User }) => {
        const user = await User.findOne({username}) 
        if (user) { throw new Error('Este usuario ya existe, prueba con otro') } 
        const newUser = await new User({ username, password})
        .save()
        return newUser
    }
 }
}