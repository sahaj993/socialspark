const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/socialspark_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function(){
    console.log('Successfully connected to DataBase:MongoDB');
});

module.exports=db;