module.exports = { 
    Query: {
        getUser: () => null,
        getDrinks: async(_,args, {Drink}) => {
            const drinks = await Drink.find({})
            .sort({name: "desc"})
            return drinks;
        },
        getProducts: async(_,args, {Product}) => {
            const products = await Product.find({})
            .sort({name: "desc"})
            return products;
        }
    },

Mutation: {
    signupUser: async(_, { username, password }, { User }) => {
        const user = await User.findOne({username}) 
        if (user) { throw new Error('Este usuario ya existe, prueba con otro') } 
        const newUser = await new User({ username, password})
        .save()
        return newUser;
        },
    addDrink: async(_, { name, price }, { Drink }) => {
        const drink = await Drink.findOne({ name }) 
        if (drink) { throw new Error('Esta bebida ya existe') } 
        const newDrink = await new Drink({ name, price })
        .save()
        return newDrink;
        },
    addProduct: async(_, { name, price, shift, extra, side }, { Product }) => {
        const product = await Product.findOne({ name }) 
        if (product) { throw new Error('Este alimento ya existe') } 
        const newProduct = await new Product({ name, price, shift, extra, side })
        .save()
        return newProduct;
        },       
    addOrder: async(_, { food, drink, total, client, employee }) => {
       const newOrder = await new Order ({ food, drink, total, client, employee })
       .save()
       return newOrder;
       }    
    }
};