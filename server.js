const express = require('express');
const mangoos = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes/index'));

mangoos.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Use this to log mongo queries begin executed!
mangoos.set('debug', true);


app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
