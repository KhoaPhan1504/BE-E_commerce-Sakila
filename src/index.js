const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3333;

app.get('/', (req, res) => {
    return res.send('Hello World');
})

mongoose.connect(`mongodb+srv://khoapaforworkit:${process.env.MONGO_DB}@cluster0.hbhugof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
    console.log('Connect DB successfull');
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
})