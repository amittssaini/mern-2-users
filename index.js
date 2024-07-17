require('dotenv').config();
const express = require('express');
const userRoute = require('./routes/user.route')
const {verifyAuth} = require('./middleware/verifyauth')
const app = express();
const PORT = 8080;

app.use(express.json());
app.listen(PORT,()=>{
    console.log(`heyy we use at the port ${PORT}`)
})
app.use('/user',userRoute);


