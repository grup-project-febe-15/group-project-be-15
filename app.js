const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const { errorHandler } = require('./middlewares/errorMiddleware')
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// connect to mongodb atlas database
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true})
.then(() => {
    console.log("connect to mongodb atlas");
}).catch(error => {
    console.log("Something wrong happened",error);
})

//routes
app.use(userRoutes);
app.use(errorHandler);

// start server
app.listen(PORT, () => {
    console.log("Server started at PORT ",PORT);
})