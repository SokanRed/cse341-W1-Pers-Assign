const route = require('express').Router();

const myControllerContact = require('../controllers/contact');

route.get('/get_contact', myControllerContact.getContact);
route.get('/get_contactById', myControllerContact.getContactById);

module.exports = route;