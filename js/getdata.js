var link = 'https://www.passportindex.org/comparebyPassport.php?p1=ru&fl=&s=yes'
var page = require('webpage').create();

page.open(link, function () {
	console.log(page.content);
	phantom.exit();
});
