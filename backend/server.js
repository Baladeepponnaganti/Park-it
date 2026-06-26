const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try
    {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB connected");
        mongoose.disconnect();
        console.log("Mongo DB disconnected");
    }
    catch(err)
    {
        console.log("Got an error");
    }
}

connectDB();

const PORT = 5000;
app.listen( PORT , async ()=>
{
    console.log(" Server started");
})