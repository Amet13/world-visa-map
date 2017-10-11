var link = 'https://www.passportindex.org/comparebyPassport.php?p1=ru&fl=&s=yes'
var page = require('webpage').create();
var fs = require('fs');
var path = '/tmp/output.txt';

page.open(link, function () {
	fs.write(path, page.content);
	phantom.exit();
});