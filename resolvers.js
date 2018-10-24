module.exports = { 
    Query: {
        getUser: () => null,
        getDrinks: async(_,args, { Drink }) => {
            const drinks = await Drink.find({})
            .sort({name: "desc"})
            return drinks;
        },
        getProducts: async(_,args, { Product }) => {
            const products = await Product.find({})
            .sort({name: "desc"})
            return products;
        },
        getSides: async(_, args, { Side }) => {
            const sides = await Side.find({})
            .sort({name: "desc"})
            return sides;
        },
        getExtras: async(_, args, { Extra }) => {
            const extra = await Extra.find({})
            .sort({name: "desc"})
            return extras;
        },
        getOrders: async(_,args, { Order }) => {
            const orders = await Order.find({})
            .sort({client: "desc"})
            return orders;
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
    addProduct: async(_, { name, price, shift }, { Product }) => {
        const product = await Product.findOne({ name }) 
        if (product) { throw new Error('Este alimento ya existe') } 
        const newProduct = await new Product({ name, price, shift, extra, side })
        .save()
        return newProduct;
        },       
    addSide: async (_, { name, price }, { Side }) => {
        const side = await Side.findOne ({ name })
        if (side) { throw new Error ('Este acompañamiento ya existe')
        }
        const newSide = await new Side({ name, price })
        .save()
        return newSide;
        },
    addExtra: async (_, { name, price }, { Extra }) => {
        const extra = await Extra.findOne ({ name })
        if (extra) { throw new Error ('Este extra ya existe')
        }
        const newExtra = await new Extra({ name, price })
        .save()
        return newExtra;
    },    
    addOrder: async(_, { food, drink, total, client, employee, side, extra, status }) => {
       const newOrder = await new Order ({ food, drink, total, client, employee, side, extra, status })
       .save()
       return newOrder;
       }    
    }
};