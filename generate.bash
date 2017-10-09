#!/bin/bash

OUTPUT_FILE="countries.data.js"
INPUT_FILE="countries.geo.iso.json"
DATASET_FILE="dataset.csv"

echo "var countriesData = {
    \"type\":\"FeatureCollection\",
    \"features\":[" > ${OUTPUT_FILE}

while read line; do
    COUNTRY=$(echo "${line}" | awk -F"\"" '{print $8}')
    STATE=$(grep "${COUNTRY}" ${DATASET_FILE} | awk -F\" '{print $2}')
    case $STATE in
        "eTA" | "e-Visa")
            STATE_NUM=1
            ;;
        "visa-free" | "Visa waiver on arrival")
            STATE_NUM=2
            ;;
        "visa on arrival")
            STATE_NUM=3
            ;;
        "visa on arrival / eVisa")
            STATE_NUM=3
            STATE="visa on arrival, eVisa"
            ;;
        "visa required")
            STATE_NUM=4
            ;;
        "visa required / eVisa")
            STATE_NUM=4
            STATE="visa required, eVisa"
            ;;
        *)
            STATE_NUM=5
            STATE="unknown"
            ;;
    esac
    echo "		${line}" | sed -r "s/properties\":\{/properties\":\{\"status\":${STATE_NUM},\"data\":\"${STATE}\",/g" >> ${OUTPUT_FILE}
done < <(grep "properties" ${INPUT_FILE} | grep -v "//")

echo "	]
};" >> ${OUTPUT_FILE}

echo "Successfully generated."

exit 0
