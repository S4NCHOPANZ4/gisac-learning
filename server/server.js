if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "./config/.env",
    });
  }
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const cors = require('cors')

//routes 
const app = express();
const port = process.env.PORT || 3030;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));
  
const yt_tn = require('./routes/thumbnail/thumbnail_routes.js')
app.use('/tnv1', yt_tn)


//routes 
app.use('/', (req, res) =>{
    res.send('Test Route Running!')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});