const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/WHOsAppDataBase', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;

const PORT = process.env.PORT || 2400;

app.listen(PORT, () => console.log('server started on port ' + PORT));
