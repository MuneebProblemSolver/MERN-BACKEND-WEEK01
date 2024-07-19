

const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://AdminUser:password@mongocluster.u92cud5.mongodb.net/Cruds?retryWrites=true&w=majority&appName=MongoCluster';

mongoose.set('strictQuery', false);  // Add this line before or after connect


mongoose.connect(connectionString)
    .then(() => console.log('MongoDB database connected successfully!'))
    .catch(error => console.error('MongoDB connection error:', error));
