const express = require('express');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
const app = express();
const port = process.env.PORT || 6969;

// MiddleWares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('halo baye');
});


//mongoDbUser1 qK96Re4zDqmgOTJl





const uri = "mongodb+srv://mongoDbUser1:qK96Re4zDqmgOTJl@cluster0.0v9zw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Running DataBase
async function run() {
  try {
    await client.connect();
    const dataBase1 = client.db("dataBase1");
    const UsersCollection = dataBase1.collection("Users");
    // GET API
    app.get('/users', async (req, res) => {
      const cursor = UsersCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    })
    // POST API
    app.post('/users', async (req, res) => {
      const newUser = req.body;
      const result = await UsersCollection.insertOne(newUser);
      console.log('got new user', req.body);
      console.log('added user', result);
      res.json(result);
    });

    //DELETE API 
    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      console.log("deleting user with id", id);
      const query = { _id: ObjectId(id) };
      const result = await UsersCollection.deleteOne(query);
      console.log(result)
      res.json(result);
    })

  }
  finally {
    // await client.close();
  };
}
run().catch(console.dir);








app.listen(port, () => {
  console.log('Running on port', port);
});














