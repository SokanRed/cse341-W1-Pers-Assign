const router = require('express').Router();

const controllerContact = require('../controllers/contact');

router.get('/contact', controllerContact.getContact);

router.get('/contact/:id', controllerContact.getContactById);

router.post('/contact', controllerContact.postContact);

router.put('/contact/:id', controllerContact.putContactById);

router.delete('/Contact/:id', controllerContact.deleteContactById);

module.exports = router;