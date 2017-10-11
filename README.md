world-visa-map
==============

[![License](https://img.shields.io/badge/license-GNU_GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0.html)

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

Countries not showing on map
----------------------------

| Country                          | ISO code | Status
| -------------------------------- | -------- | ----------------- |
| Hong Kong                        | HK       | *visa-free*       |
| Liechtenstein                    | LI       | **visa required** |
| Monaco                           | MC       | **visa required** |
| Macao                            | MO       | *visa-free*       |
| Singapore                        | SG       | **visa required** |
| San Marino                       | SM       | **visa required** |
| Holy See (Vatican City State)    | VA       | **visa required** |

Credits
-------

Original world map in GeoJSON format: https://github.com/johan/world.geo.json

UN to ISO codes converter: http://www.worldatlas.com/aatlas/ctycodes.htm

Example for Leaflet and GeoJSON: https://github.com/tetrahedra/worldmap

Data source: https://www.passportindex.org

Where to edit map: http://geojson.io

TODO
----

* TravisCI autobuild (docker)
* Host on GitHub Pages demo
* Generate maps for other countries
