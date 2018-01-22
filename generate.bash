#!/bin/bash

DATA="js/data.js"
CSV="csv/ru.csv"

echo "var data = [" > ${DATA}
while read COUNTRY; do
    CODE=$(echo "${COUNTRY}" | awk '{print $1}')
    VALUE=$(echo "${COUNTRY}" | awk '{print $2}')
    echo -e "    ['$CODE', $VALUE]," | tr '[:upper:]' '[:lower:]' >> ${DATA}
done < "${CSV}"

echo "];" >> ${DATA}
exit 0
