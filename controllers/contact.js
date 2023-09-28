const contact = require('../db/connect');

const getContact = async (req, res) => {
  const Db = await contact.getDb();
  res.send(Db);
};

const getContactById = async (req, res) => {
  const contactById = await contact.getContactById();
  res.send(contactById);
};

const postContact = async (req, res) => {
  const createContact = await contact.postContact();
  res.send(createContact);
};

const putContactById = async (req, res) => {
  const updateContactById = await contact.putContactById();
  res.send(updateContactById);
};

const deleteContactById = async (req, res) => {
  const deleteContactById = await contact.deleteContactById();
  res.send(deleteContactById);
};

module.exports = { getContact, getContactById, postContact, putContactById, deleteContactById };
