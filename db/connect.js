const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.uri);

const { ObjectId } = require('mongodb');

const getDb = async() => {
    await client.connect();

    const resultDb = await client.db("CSE341").collection("contacts").find();

    const resultArray = await resultDb.toArray();
    return resultArray;
}

const getContactById = async() => {
    await client.connect();
    const resultContactById = await client.db("CSE341").collection("contacts").find({ _id: new ObjectId("651348064b5cb53057bf9c99") });

    const resultArray = await resultContactById.toArray();
    return resultArray;
}

module.exports = {
    getDb,
    getContactById
};