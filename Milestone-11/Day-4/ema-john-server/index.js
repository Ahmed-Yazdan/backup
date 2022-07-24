const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// MiddleWare
app.use(cors());
app.use(express.json());


/*--------------
D A T A B A S E 
----------------*/
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0v9zw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const runDatabase = async () => {
    try {
        await client.connect();
        const database = client.db('emaJohn');
        const productCollection = database.collection('products');
        const orderCollection = database.collection('orders');
        //GET PRODUCTS API
        app.get('/products', async (req, res) => {
            const cursor = productCollection.find({});
            const count = await cursor.count();
            // Pagination
            const page = req.query.page;
            const size = parseInt(req.query.size);
            let products;
            if (page) {
                products = await cursor.skip(page * size).limit(size).toArray();
            } else {
                products = await cursor.toArray();
            }
            res.send({
                count,
                products
            });
        });

        app.post('/products/bykeys', async (req, res) => {
            const keys = req.body;
            const query = { key: { $in: keys } }
            const products = await productCollection.find(query).toArray();
            res.json(products);
            // console.log(keys, query);
        });

        // ADD ORDERS APi
        app.post('/orders', async (req, res) => {
            const order = req.body;
            console.log('Order = ',order);
        })

    } finally {
        // await client.close()
    }
}
runDatabase().catch(console.dir);


/*--------------------
N O D E - S E R V E R 
---------------------*/
app.get('/', (req, res) => {
    res.send('halo vaye');
});

app.listen(port, () => {
    console.log('Server is running on port:', port)
})