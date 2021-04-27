const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require("cors");
const PORT = process.env.PORT || 3010;
const app = express();
require('dotenv').config()
const BooksApiRoute = require('./routes/BooksApi');


// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes here
app.use(BooksApiRoute); 

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

const uri = process.env.NODE_ENV==="production" ? process.env.MONGODB_URI: "mongodb://localhost:27017/googlebooks"
mongoose.connect(
  uri,
  { useNewUrlParser: true },
  { useUnifiedTechnology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established!")
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
