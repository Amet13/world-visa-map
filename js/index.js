// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'custom/world-highres3'
    },

    title: {
        text: 'World visa map for russian citizens'
    },

    subtitle: {
        text: 'Source on <a href="https://github.com/Amet13/world-visa-map">GitHub</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'top'
        }
    },

    colorAxis: {
        dataClasses: [{
            from: 1,
            to: 1,
            color: 'yellow',
            name: '(1) eTA'
        }, {
            from: 2,
            to: 2,
            color: 'yellow',
            name: '(2) e-Visa'
        }, {
            from: 3,
            to: 3,
            color: 'green',
            name: '(3) visa-free',
        }, {
            from: 4,
            to: 4,
            color: 'green',
            name: '(4) Visa waiver on arrival'
        }, {
            from: 5,
            to: 5,
            color: 'blue',
            name: '(5) visa on arrival'
        }, {
            from: 6,
            to: 6,
            color: 'blue',
            name: '(6) visa on arrival / eVisa',
        }, {
            from: 7,
            to: 7,
            color: 'red',
            name: '(7) visa required'
        }, {
            from: 8,
            to: 8,
            color: 'red',
            name: '(8) visa required / eVisa'
        }, {
            from: 9,
            to: 9,
            color: 'black',
            name: '(9) unknown',
        }, {
            from: 10,
            to: 10,
            color: 'gray',
            name: '(10) Russia'
        }]
    },

    series: [{
        data: data,
        name: 'Is visa required?',
        states: {
            hover: {
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }],

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    }
});

// tell the embed parent frame the height of the content
if (window.parent && window.parent.parent){
     window.parent.parent.postMessage(["resultsFrame", {
      height: document.body.getBoundingClientRect().height,
      slug: "o6mp8ra7"
    }], "*")
}
