const contact = require('../db/connect');
const { ObjectId } = require('mongodb');
// const ObjectId = require('mongodb').ObjectId

const getContact = async(req, res) => {
    const Db = await contact.getDb();
    res.send(Db);
};

const getContactById = async(req, res) => {
    const contactById = await contact.getContactById();
    res.send(contactById);
};

// const postContact = async(req, res) => {
//     const createContact = await contact.postContact({
//         "firstName": "Serge",
//         "lastName": "Spagnolini",
//         "email": "sergespagnolini@gmail.com",
//         "favoriteColor": "Viridian Green",
//         "birthday": "1956/09/26"
//     });
//     res.status(201).send(`new contact was created ${createContact}`);
// };

const postContact = async(req, res) => {
    const createContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await contact.postContact(createContact);
    res.status(201).send(`New contact was created ${response}`);

    // if (response.acknowledged) {
    //     res.status(201).json(response);
    // } else {
    //     res.status(500).json(response.error || 'An error occured while creating the contact.');
    // }
};

// const putContactById = async(req, res) => {
//     const userId = new ObjectId(req.params.id);

//     const body = {
//         "firstName": "Francis",
//         "lastName": "Spagnolini",
//         "email": "francisspagnolini@gmail.com",
//         "favoriteColor": "Turquoise",
//         "birthday": "1956/09/26"
//     };
//     const updateContactById = await contact.putContactById(userId, body);
//     res.status(204).send("Contact was updated");
// };

const putContactById = async(req, res) => {
    const userId = new ObjectId(req.params.id);
    const body = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await contact.putContactById(userId, body);
    res.status(204).send("Contact was updated");
    // console.log(response);
    // if (response.modifiedCount > 0) {
    //     res.status(204).send(`Contact Updated`);
    // } else {
    //     res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    // }

}

const deleteContactById = async(req, res) => {
    const userId = new ObjectId(req.params.id);
    const deleteContactById = await contact.deleteContactById(userId);
    res.status(200).send("Contact by Id was deleted from database");
};

module.exports = { getContact, getContactById, postContact, putContactById, deleteContactById };