const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db.js");
const UserRoutes = require('./routes/UserRoute.js')

require("dotenv").config();
require("colors");

connectDB();




const app = express();

if(process.env.NODE_ENV === 'development')
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
 
app.use('/api/users',UserRoutes);

app.get('*', (req, res) => {
    console.log(req.body);
    console.log('ending point does not exist');
    //res.json(req.body);
    res.status(404).send('ending point does not exist');
  });
  
  app.use('/api/users', UserRoutes);

const PORT = process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(`server is connect in ${process.env.NODE_ENV} mode on port ${PORT}`.red)
);