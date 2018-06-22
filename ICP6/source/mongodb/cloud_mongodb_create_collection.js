/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:santosh1@ds143778.mlab.com:43778/weblab';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("weblab");
    dbase.createCollection("students", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
