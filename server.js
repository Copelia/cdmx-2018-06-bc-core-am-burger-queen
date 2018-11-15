const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});
const fs = require('fs');
const path = require('path');

const Drink = require('./models/Drink');
const Order = require('./models/Order');
const Product = require('./models/Product');
const User = require('./models/User');
const Side = require('./models/Side');
const Extra = require('./models/Extra');

const resolvers = require('./resolvers');

const filePath = path.join(__dirname, 'typeDefs.gql');
// console.log(filePath);
const typeDefs = fs.readFileSync(filePath, 'utf-8')

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
)
.then(() => console.log('Está viva!')
)
.catch((error) => console.log(error)
);

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: 
    // ({req} =>
         {
        // console.log(req.headers['authorization']); 
        Drink, Product, Side, Extra, User, Order
    } 
});
//En los paréntesis del listen, puedo cambiar el número del puerto {port: process.env.PORT || 4000}
server.listen({port: process.env.PORT || 4000}).then(({url}) => {
    (console.log('Está vivo', url))
});




