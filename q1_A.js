const fs = require('fs');
const convert = require('xml-js');

var xml = fs.readFileSync('./xml_content.xml', { encoding: 'utf8', flag: 'r' });
console.log(xml);