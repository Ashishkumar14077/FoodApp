const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDb connected woth server : ${data.connection.host}`);
    });
  // handled by unhandles error rejection
};

module.exports = connectDatabase;
