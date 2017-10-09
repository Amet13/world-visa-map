var page = require('webpage').create();
var fs = require('fs');
var path = 'output.txt';
page.open('https://www.passportindex.org/comparebyPassport.php?p1=ru&fl=&s=yes', function () {
	fs.write(path, page.content);
	phantom.exit();
});