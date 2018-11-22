/* global L */

const mapLib = {};
mapLib.create = function(domId, latlng, zoomLevel) {
  this.map = L.map(domId).setView(latlng, zoomLevel);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    minZoom: 3,
    maxZoom: 15
  }).addTo(this.map);
};

mapLib.panTo = function([lat, lgn]) {
  this.map.panTo([lat, lgn]);
};

mapLib.addMarker = function([lat, lng], popupContent) {
  L.marker([lat, lng]).addTo(this.map).bindPopup(popupContent).openPopup();
};

mapLib.clearMarkers = function() {
  this.map.eachLayer(marker => {
    if (marker._popup) {
      marker.remove();
    }
  });
};

export default mapLib;
