const contact = require('../db/connect');
const { ObjectId } = require('mongodb');

const getContact = async(req, res) => {
    const Db = await contact.getDb();
    res.send(Db);
};

const getContactById = async(req, res) => {
    const contactById = await contact.getContactById();
    res.send(contactById);
};

const postContact = async(req, res) => {
    const createContact = await contact.postContact({
        "firstname": "Serge",
        "lastname": "Spagnolini",
        "email": "sergespagnolini@gmail.com",
        "favoriteColor": "Viridian Green",
        "birthday": "1956/09/26"
    });
    res.status(201).send(`new contact was created ${createContact}`);
};

const putContactById = async(req, res) => {
    const userId = new ObjectId(req.params.id);

    const body = {
        "firstname": "Francis",
        "lastname": "Spagnolini",
        "email": "francisspagnolini@gmail.com",
        "favoriteColor": "Turquoise",
        "birthday": "1956/09/26"
    };
    const updateContactById = await contact.putContactById(userId, body);
    res.status(204).send("contact was updated");
};

const deleteContactById = async(req, res) => {
    const userId = new ObjectId(req.params.id);
    const deleteContactById = await contact.deleteContactById(userId);
    res.status(200).send("Contact by Id was deleted from database");
};

module.exports = { getContact, getContactById, postContact, putContactById, deleteContactById };