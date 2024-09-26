const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose
        .connect('mongodb+srv://aneebaarshadhasnian:xKLJcCL33aPBxuoA@cluster0.mysyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Connected Successfully'))
        .catch((err) => console.error('Not Connected'));
}

module.exports = connectDB;

