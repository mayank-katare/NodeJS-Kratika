// Q3. A)

const request = require('request');
const fs = require('fs');

const options = {
    url: 'https://www.google.com',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
};

request(options, function(err, res, body) {
    fs.writeFile("./html", body, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    
});
