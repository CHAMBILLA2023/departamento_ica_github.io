var map = L.map('map', {
    center: [-9.189967, -75.015152], // Coordenadas del centro del Perú
    zoom: 6, // Zoom inicial para mostrar todo el país
    minZoom: 5, // Zoom mínimo permitido
    maxZoom: 20, // Zoom máximo permitido
  });
  
  var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
  }).addTo(map);
  
  var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }).addTo(map);
  
  var farmaciasLayer = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'departamento_ica:Farmacias',
    format: 'image/png',
    transparent: true
  });
  
  var bancosLayer = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'departamento_ica:bancos',
    format: 'image/png',
    transparent: true
  });
  
  var colegiosLayer = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'departamento_ica:colegios',
    format: 'image/png',
    transparent: true
  });
  
  var departamentoLayer = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'departamento_ica:deparamento de ica',
    format: 'image/png',
    transparent: true
  });
  
  var museosLayer = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'departamento_ica:museos',
    format: 'image/png',
    transparent: true
  });
  
  var restaurantesLayer = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'departamento_ica:restaurantes',
    format: 'image/png',
    transparent: true
  });
  
  var semaforosLayer = L.tileLayer.wms('http://localhost:8080/geoserver/wms', {
    layers: 'departamento_ica:semaforos',
    format: 'image/png',
    transparent: true
  });
  
  var baseMaps = {
    "OSM": basemapOSM,
    "Satélite": googleSat
  };
  
  var overlayMaps = {
    "Farmacias": farmaciasLayer,
    "Bancos": bancosLayer,
    "Colegios": colegiosLayer,
    "Departamento de Ica": departamentoLayer,
    "Museos": museosLayer,
    "Restaurantes": restaurantesLayer,
    "Semáforos": semaforosLayer
  };
  
  L.control.layers(baseMaps, overlayMaps, {
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
  }).addTo(map);
  
  
  
  
  
  