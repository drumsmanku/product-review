const express= require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');

const app = express();
app.use(cors());



dotenv.config()
app.use(bodyParser.json());


app.get('/',(req, res)=>{
  res.send('success')
})
const authenticationRoutes = require('./Routes/AuthenticationRoutes')
app.use(authenticationRoutes)


app.listen(process.env.PORT, ()=>{
  mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('listening on port ' + process.env.PORT)
  }).catch(err=>console.log(err))
})