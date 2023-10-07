const mongodb = require("../db/connect");

const ObjectId = require('mongodb').ObjectId;


const getContact = async(req, res) => {
    const Db = await mongodb.getDb().db('CSE341').collection("contacts").find().toArray();
    res.send(Db);
};

const getContactById = async(req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('CSE341')
        .collection("contacts")
        .find({ _id: userId })
        .toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
};

const postContact = async(req, res) => {
    const createContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb
        .getDb()
        .db('CSE341')
        .collection("contacts")
        .insertOne(createContact);
    res.status(200).json(result);

};

const putContactById = async(req, res) => {
    const userId = new ObjectId(req.params.id);
    const updateContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb
        .getDb()
        .db('CSE341')
        .collection("contacts")
        .find({ _id: userId })
        .replaceOne({ _id: userId }, updateContact);
    res.setHeader("Content-Type", "application/json");
    res.status(204).json(result);
};

const deleteContactById = async(req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('CSE341')
        .collection("contacts")
        .remove({ _id: userId }, true);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send("Contact by Id was deleted from database")
    res.status(200).json(result);
};

module.exports = { getContact, getContactById, postContact, putContactById, deleteContactById };