const express = require('express');
const mongoose = require('mongoose');
const app = express();
const api = require('../mongoUri');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(api.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});