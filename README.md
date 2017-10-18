world-visa-map
==============

[![TravisCI](https://travis-ci.org/Amet13/world-visa-map.svg?branch=master)](https://travis-ci.org/Amet13/world-visa-map/)
[![License](https://img.shields.io/badge/license-GNU_GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0.html)

Interactive world map which shows visa policy for russian citizens — https://visa.amet13.name/

How to self host?
-----------------

Example for CentOS 7:
```
yum -y install epel-release
yum -y install bzip2 fontconfig git npm openssl
npm install phantomjs -g
git clone https://github.com/Amet13/world-visa-map
cd world-visa-map/
./generate.bash
```