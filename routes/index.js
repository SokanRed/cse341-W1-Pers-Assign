const router = require('express').Router();

const myController = require('../controllers');

const contact = require('./contact');

const swagger = require('./swagger');

router.use('/', contact)
    .use('/api-docs', swagger);

module.exports = router;