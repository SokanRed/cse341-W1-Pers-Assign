const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

app.use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })

// app.use('/', require('./routes'));
app.use('/', require('./routes/contact'));

app.listen(port, () => {
    console.log(`Web Server is listening at port ${port}`);
});