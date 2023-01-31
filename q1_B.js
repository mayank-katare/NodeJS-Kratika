
const fs = require('fs');
const convert = require('xml-js');
var xml = fs.readFileSync('./xml_content.xml', { encoding: 'utf8', flag: 'r' },(err,data)=>{
    if (err) return console.log(err);
    return console.log(data);
});
var xmlData = convert.xml2json(xml, {
    compact: true,
    space: 4
});
console.log(xmlData);


