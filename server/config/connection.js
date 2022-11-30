const mongoose = require('mongoose');

mongoose.connect(
  // process.env.MONGODB_URI || 'mongodb://container_mongodb:27017/todo_db',
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todo_db',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;