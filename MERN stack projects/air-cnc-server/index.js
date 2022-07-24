const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const { MongoClient, ServerApiVersion } = require('mongodb');
// const dotenv;


// Middleware


const uri = "mongodb+srv://aircncAdmin:1PrXDe1xJLxbMyKq@cluster0.0v9zw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const runDatabase = async () => {
    try {
        await client.connect()
        






    }
    finally {
        // Do nothing
    }
}

runDatabase().catch(console.dir);





app.get("/", (req, res) => {
    res.send("Hello world");
});




app.listen(port, () => {
    console.log("Listening to port ", port)
})