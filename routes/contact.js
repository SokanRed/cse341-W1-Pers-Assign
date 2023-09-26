const route = require('express').Router();

//const { route } = require('.');
const myControllerContact = require('../controllers/contact');

route.get('/get_contact', myControllerContact.getContact);

module.exports = route;