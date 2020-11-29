const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());


const menuRoute = require('./routes/menuRoute');

const orderRoute = require('./routes/orderRoute');


//menu options

app.use('/menu', menuRoute);

//post orders

app.use('/orders', orderRoute);


const PORT = 8000;

app.listen(PORT,() => {
    console.log('Server is up n running!')
})