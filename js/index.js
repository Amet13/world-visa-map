// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'custom/world-highres3'
    },

    title: {
        text: 'World visa map for russian citizens in 2018'
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
            from: 0,
            to: 0,
            color: 'red',
            name: '(0) visa required'
        }, {
            from: 1,
            to: 1,
            color: 'blue',
            name: '(1) visa can be obtained on arrival ',
        }, {
            from: 2,
            to: 2,
            color: 'yellow',
            name: '(2) eTA required'
        }, {
            from: 3,
            to: 3,
            color: 'green',
            name: '(3) visa-free'
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
