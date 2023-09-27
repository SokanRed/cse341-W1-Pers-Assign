const contact = require('../db/connect');

const getContact = async(req, res) => {
    const Db = await contact.getDb();
    res.send(Db);
}

const getContactById = async(req, res) => {
    const ContactById = await contact.getContactById();
    res.send(ContactById);
}

module.exports = { getContact, getContactById };