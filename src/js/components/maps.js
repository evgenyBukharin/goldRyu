ymaps.ready(init);
function init() {
	if (document.getElementById("contacts-map") !== null) {
		myMap = new ymaps.Map("contacts-map", {
			center: [55.05386257036589, 61.45853671216136],
			zoom: 9,
		});
	} else if (document.getElementById("main-map") !== null) {
		myMap = new ymaps.Map("main-map", {
			center: [55.05386257036589, 61.45853671216136],
			zoom: 9,
		});
	} else {
		return;
	}
	const geoObject1 = new ymaps.GeoObject({
		geometry: {
			type: "Point",
			coordinates: [55.154938569541265, 61.31335099999995],
		},
	});
	const geoObject2 = new ymaps.GeoObject({
		geometry: {
			type: "Point",
			coordinates: [54.86839356980941, 61.40452099999999],
		},
	});
	myMap.geoObjects.add(geoObject1).add(geoObject2);
}
