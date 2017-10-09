var map = L.map('map').setView([0.0, 0.0], 2);
var info = L.control();

info.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};

info.update = function (props) {
	this._div.innerHTML = '<h4>Visa map for russian citizens</h4>' + (props ?
	'<b>' + props.name + '</b><br />' + props.data	: 'Hover over a country');
};

info.addTo(map);

function getColor(d) {
	return d == 5 ? 'FFEDA0' : // Russia
			d == 1 ? '#B09203' : // eta or e-Visa (yellow)
			d == 2 ? '#2B893C' : // visa-free or Visa waiver on arrival (green)
			d == 3 ? '#3266B1' : // visa on arrival or visa on arrival / eVisa (blue)
			d == 4 ? '#A22121' : // visa required or visa required / eVisa (red)
					'#FFEDA0';
}

function style(feature) {
	if(feature.properties.status > 0) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.status)
		}
	}
	else {
		return {
			weight: 0,
			opacity: 0,
			color: 'red',
			dashArray: '',
			fillOpacity: 0.0,
			fillColor: getColor(feature.properties.status)
		}
	};
}

function highlightFeature(e) {
	var layer = e.target;
	layer.setStyle({
		weight: 1,
		color: '#666',
		dashArray: '',
		fillOpacity: 0.7
	});
	if (!L.Browser.ie && !L.Browser.opera)
		layer.bringToFront();
	info.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
	geojson.resetStyle(e.target);
	info.update();
}

function zoomToFeature(e) {
	map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
	if(feature.properties.status > 0) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
		layer.bindPopup(feature.properties.name);
	}
}

geojson = L.geoJson(countriesData, {
	style: style,
	onEachFeature: onEachFeature
}).addTo(map);

map.attributionControl.addAttribution('Some text with <a href="http://localhost/">LINK</a>');