const contact = require('../db/connect');

const getContact = async(req, res) => {
    const Db = await contact.getDb();
    res.send(Db);
}

module.exports = { getContact };