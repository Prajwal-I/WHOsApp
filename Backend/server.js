const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/WHOsAppDataBase', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

app.listen(2400, () => console.log('server started on port 2400'))
