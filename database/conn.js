var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mongo_mongoose_testes";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
 
    console.log("Database Connected Now!!!!!");
    db.close();
  });


module.exports = MongoClient;