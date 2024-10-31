const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ClientSession } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dbuser1:djlwnwh30k7gmGsk@cluster0.hpwkhe3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully");
    }
    catch {
        console.log('Not connected successfully');
    }
    finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Simple CRUD');
});

app.listen(PORT, () => {
    console.log(``);
});