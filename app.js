const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
    res.send('Welcome to the API route!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://baatoul:ayM00bSNiXLU3i6N@cluster0.zblfsi5.mongodb.net/?retryWrites=true&w=majority";

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
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
