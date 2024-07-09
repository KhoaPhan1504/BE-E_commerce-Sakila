const express = require('express');
const { default: mongoose } = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('Hello World');
})

routes(app);

mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
    console.log('Connect DB successfull');
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
})