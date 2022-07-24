const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database //
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0v9zw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const runDatabase = async () => {
    try {
        await client.connect();
        await client.connect();
        const database = client.db('masterMind');
        const classesCollection = database.collection('classes');

        // GET API ( Setting data to /classes )
        app.get('/classes', async (req, res) => {
            const cursor = classesCollection.find({});
            const data = await cursor.toArray();
            res.send(data);
        });

        // GET single API ( Sending specific video data to <Watch> component )
        app.get('/classes/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const currentClass = await classesCollection.findOne(query);
            res.json(currentClass);
        });

        // POST API ( Adding classes )
        app.post('/classes', async (req, res) => {
            const classToAdd = req.body;
            const result = await classesCollection.insertOne(classToAdd);
            res.json(result);
        })

        // DELETE API ( Delete classes from <ManageClasses/> )
        app.delete('/classes/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await classesCollection.deleteOne(query);
            res.json(result);
        })


    } finally {
        // client.close();
    }
}
runDatabase().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Server running');
});

app.listen(port, () => {
    console.log("Running on port", port)
})



/* 
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await servicesCollection.findOne(query);
            res.json(service);
        })

                app.post('/services', async (req, res) => {
            const service = req.body;
            console.log('Hitting the post api', service);

            const result = await servicesCollection.insertOne(service);
            console.log(result);
            res.json(result);
        })
*/