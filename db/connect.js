const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.uri);

const getDb = async() => {
    await client.connect();
    const resultDb = client.db('CES341').collection('contacts').find();
    const resultArray = await resultDb.toArray();
    return resultDb;
}

module.exports = {
    getDb
};

/*let _db;

const initDb = (callback) => {
    if (_db) {
        console.log('Db is already initialized!');
        return callback(null, _db);
    }
    MongoClient.connect(process.env.uri)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw Error('Db not initialized');
    }
    return _db;
};

module.exports = {
    initDb,
    getDb,
};*/