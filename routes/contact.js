const route = require('express').Router();

const controllerContact = require('../controllers/contact');

route.get('/get_contact', controllerContact.getContact);
route.get('/get_contactById', controllerContact.getContactById);


route.post('/post_contact', controllerContact.postContact);
route.put('/contact/:id', controllerContact.putContactById);
route.delete('/deleteContactById/:id', controllerContact.deleteContactById);

module.exports = route;