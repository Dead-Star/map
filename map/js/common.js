
















var x = 47.2411;
var y =  39.71084;



var map = L.map('mapid',)
	.setView([x,y], 17);

L.tileLayer(
	'http://{s}.tile.osm.org/{z}/{x}/{y}.png',{
		attribution: '(c) OSM contributors'
	}
	).addTo(map);	



var parkIcon = L.icon({
	iconUrl: 'http://s1.iconbird.com/ico/0912/Urbanstories/w256h2561347187616BenchbyArtdesigner.lv.png',
	iconSize: [70, 70],

});

var sportIcon = L.icon({
	iconUrl: 'http://s1.iconbird.com/ico/2013/12/564/w512h5121387223510icons2.png',
	iconSize: [70, 70],
	
});


var homeIcon = L.icon({
	iconUrl: 'http://s1.iconbird.com/ico/0612/FreeBusinessDesktopIcons/file1339191805.png',
	iconSize: [70, 70],
	
});



L.marker([47.24187, 39.71061],{icon : parkIcon})
.addTo(map)
.bindPopup('Студенческий парк');


L.marker([47.24101, 39.71006],{icon : sportIcon})
.addTo(map)
.bindPopup('Спортивный манеж ДГТУ');


L.marker([47.23972, 39.7127],{icon : homeIcon})
.addTo(map)
.bindPopup('Общежитие №5 ДГТУ ');










L.control.mousePosition().addTo(map);



L.control.polylineMeasure().addTo(map);

