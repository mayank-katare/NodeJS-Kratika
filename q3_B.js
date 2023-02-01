const request = require('request');
const fs = require('fs');
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();


emitter.on('safe_file', function(url){
    request(url, function(err, res, body) {
        fs.writeFile("./html1", body, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
        
    });
});



emitter.emit('safe_file','https://www.mongodb.com');  //html file
