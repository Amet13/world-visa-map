#!/bin/bash

gen_ru() {
    DATA_RU="js/ru.js"
    CSV_RU="csv/ru.csv"

    echo "var data = [" > ${DATA_RU}
    while read COUNTRY; do
        CODE_RU=$(echo "${COUNTRY}" | awk '{print $1}')
        VALUE_RU=$(echo "${COUNTRY}" | awk '{print $2}')
        echo -e "    ['$CODE_RU', $VALUE_RU]," | tr '[:upper:]' '[:lower:]' >> ${DATA_RU}
    done < "${CSV_RU}"

    echo "];" >> ${DATA_RU}
}

gen_ua() {
    DATA_UA="js/ua.js"
    CSV_UA="csv/ua.csv"

    echo "var data = [" > ${DATA_UA}
    while read COUNTRY; do
        CODE_UA=$(echo "${COUNTRY}" | awk '{print $1}')
        VALUE_UA=$(echo "${COUNTRY}" | awk '{print $2}')
        echo -e "    ['$CODE_UA', $VALUE_UA]," | tr '[:upper:]' '[:lower:]' >> ${DATA_UA}
    done < "${CSV_UA}"

    echo "];" >> ${DATA_UA}
}

gen_ru
gen_ua
exit 0
