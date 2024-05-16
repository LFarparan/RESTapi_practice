require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// database code
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on( 'error' ,  (error) => console.log(error))
db.once( 'open' ,  ( ) => console.log('Connected to database'))


app.use(express.json())

const subscribersRouter = require('./routes/subscribers')

app.use('/subscribers', subscribersRouter);




// listening
const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});