/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:santosh1@ds143778.mlab.com:43778/weblab';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("weblab");
    dbase.dropCollection("students", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});