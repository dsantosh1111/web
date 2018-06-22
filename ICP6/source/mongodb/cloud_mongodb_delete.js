/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://root:santosh1@ds143778.mlab.com:43778/weblab';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("weblab");
    var myquery = { address: 'Main Road 989' };
    dbase.collection("students").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});