const express = require('express');
const taskRouter = require('./routes/taskroute');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');


const app = express();
// Middleware
app.use(bodyParser.json());
app.use("/taskRoute",taskRouter);

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},).then((res) => {
  console.log("database connected");
}).catch(error => {
  console.log(error);
});


// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running `);
});
