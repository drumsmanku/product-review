const express= require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
const fetchAndSaveProducts = require('./fetchProducts');
const authenticationRoutes = require('./Routes/AuthenticationRoutes')

const app = express();
app.use(cors());
dotenv.config()
app.use(bodyParser.json());


app.get('/',(req, res)=>{
  res.send('success')
})
app.use(authenticationRoutes)


app.listen(process.env.PORT, ()=>{
  mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('listening on port ' + process.env.PORT);
    fetchAndSaveProducts('https://64e0caef50713530432cafa1.mockapi.io/api/products');
  }).catch(err=>console.log(err))
})