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
| Micronesia, Federated States of  | FM       | *visa-free*       |
| Grenada                          | GD       | *visa-free*       |
| Hong Kong                        | HK       | *visa-free*       |
| Kiribati                         | KI       | **visa required** |
| Comoros                          | KM       | visa on arrival   |
| Saint Kitts and Nevis            | KN       | *visa-free*       |
| Saint Lucia                      | LC       | *visa-free*       |
| Liechtenstein                    | LI       | **visa required** |
| Monaco                           | MC       | **visa required** |
| Marshall Islands                 | MH       | visa on arrival   |
| Macao                            | MO       | *visa-free*       |
| Mauritius                        | MU       | *visa-free*       |
| Maldives                         | MV       | visa on arrival   |
| Nauru                            | NR       | visa on arrival   |
| Palau                            | PW       | visa on arrival   |
| Seychelles                       | SC       | *visa-free*       |
| Singapore                        | SG       | **visa required** |
| San Marino                       | SM       | **visa required** |
| Sao Tome and Principe            | ST       | *visa-free*       |
| Tonga                            | TO       | visa on arrival   |
| Tuvalu                           | TV       | visa on arrival   |
| Holy See (Vatican City State)    | VA       | **visa required** |
| Saint Vincent and the Grenadines | VC       | *visa-free*       |
| Samoa                            | WS       | *visa-free*       |

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
