const route = require('express').Router();

const controllerContact = require('../controllers/contact');

route.get('/get_contact', controllerContact.getContact);
route.get('/get_contactById', controllerContact.getContactById);

/*
route.post('/get_contactById', controllerContact.createContact);
route.put('/get_contactById', controllerContact.updateContact);
route.delete('/get_contactById', controllerContact.deleteContact);
*/
module.exports = route;
