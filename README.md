world-visa-map
==============

Interactive world map which shows visa policy for russian citizens

How to self host?
-----------------

Example for CentOS:
```
yum -y install bzip2 fontconfig npm
npm install phantomjs -g
git clone https://github.com/Amet13/world-visa-map
cd world-visa-map/
./generate.bash
```

Demo
----

https://rawgit.com/Amet13/world-visa-map/master/index.html

TODO
----

* TravisCI autobuild (docker)
* Add license
* Host on GitHub Pages
* Generate maps for other countries
* Explore some countries
* Makefile

Countries do not use
--------------------

```
Andorra (AD)
Antartica (AQ)
Antigua and Barbuda (AG)
Barbados (BB)
Bahrain (BH)
Bermuda (BM)
Cape Verde (CV)
Dominica (DM)
Western Sahara (EH)
Falkland Islands (Malvinas) (FK)
Micronesia, Federated States of (FM)
Grenada (GD)
French Guiana (GF)
Greenland (GL)
Hong Kong (HK)
Kiribati (KI)
Comoros (KM)
Saint Kitts and Nevis (KN)
Saint Lucia (LC)
Liechtenstein (LI)
Monaco (MC)
Marshall Islands (MH)
Macao (MO)
Mauritius (MU)
Maldives (MV)
New Caledonia (NC)
Nauru (NR)
Puerto Rico (PR)
Palau (PW)
Seychelles (SC)
Singapore (SG)
San Marino (SM)
Sao Tome and Principe (ST)
French Southern Territories (TF)
Tonga (TO)
Tuvalu (TV)
Holy See (Vatican City State) (VA)
Saint Vincent and the Grenadines (VC)
Samoa (WS)
Somaliland
Northern Cyprus
```

Credits
-------

https://github.com/johan/world.geo.json/blob/master/countries.geo.json

http://www.worldatlas.com/aatlas/ctycodes.htm

https://github.com/tetrahedra/worldmap

https://www.passportindex.org/comparebyPassport.php?p1=ru&fl=&s=yes
