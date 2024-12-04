mapboxgl.accessToken = mapToken;
console.log(mapToken);
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometery.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: 'red'})
    .setLngLat([listing.geometery.coordinates])
    .setPopup(new mapboxgl.Popup({offset: 25}))
    .setHTML(`<h4>${listing.title }</h4><p>Exact location will be provided after booking</p>`)
    .addTo(map);

// var map = L.map('map');
// map.setView([51.505, -0.09], 13);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// maxZoom: 19,
// attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);