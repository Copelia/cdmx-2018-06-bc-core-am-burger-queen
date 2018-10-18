const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const Drink = require('./models/Drink');
const Order = require('./models/Order');
const Product = require('./models/Product');
const User = require('./models/User');

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
)
.then(() => console.log('Está viva!')
)
.catch((error) => console.log(error)
);

    // Como apollo lee gql, hay que convertir el array a este modelo
    // En typeDefs solo defines, no ejecutas los modelos, para eso se usarán los resolvers
    const typeDefs = gql`
    type List {
        bebida: String
        snack: String
    }

    type Query {
        getList: [List]
    }
    `;

    
// Creando servidor, y pasándole la data al servidor
// ({ typeDefs: typeDefs }) uno es la llave para acceder, el otro es la variable, que tienen el mismo nombre,        por eso se omite uno
const server = new ApolloServer({ 
    typeDefs,
    context:{
        Drink,
        Product,
        User,
        Order
    } 
});
//En los paréntesis del listen, puedo cambiar el número del puerto
server.listen().then(({url}) => {
    (console.log('Está vivo', url))
});




