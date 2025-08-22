var wms_layers = [];

var lyr_GoogleSatellite = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a> &nbsp&nbsp ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
        
var lyr_OpenStreetMap = new ol.layer.Tile({
            'title': 'OpenStreetMap ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        

var lyr_BARRIOSYOASENTAMIENTOURBANOS = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> BARRIOSYOASENTAMIENTOURBANOS',
    source: new ol.source.Vector(), 
    declutter: false,
    style: style_BARRIOSYOASENTAMIENTOURBANOS,
    permalink: "BARRIOSYOASENTAMIENTOURBANOS",
    popuplayertitle: 'BARRIOS Y /O ASENTAMIENTO URBANOS',
    creationdate: '2025-08-11 15:50:54',
    interactive: true,
});
function load_BARRIOSYOASENTAMIENTOURBANOS_data() {
    var format_BARRIOSYOASENTAMIENTOURBANOS = new ol.format.GeoJSON();
    var features_BARRIOSYOASENTAMIENTOURBANOS = format_BARRIOSYOASENTAMIENTOURBANOS.readFeatures(json_BARRIOSYOASENTAMIENTOURBANOS, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_BARRIOSYOASENTAMIENTOURBANOS = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/BARRIOSYOASENTAMIENTOURBANOS.png" /> <b>BARRIOS Y /O ASENTAMIENTO URBANOS</b>'
    });
    lyr_BARRIOSYOASENTAMIENTOURBANOS.setSource(jsonSource_BARRIOSYOASENTAMIENTOURBANOS);
    lyr_BARRIOSYOASENTAMIENTOURBANOS.set(
    "title", '<img src="styles/legend/BARRIOSYOASENTAMIENTOURBANOS.png" /> BARRIOS Y /O ASENTAMIENTO URBANOS'
    );
var featureCounter_BARRIOSYOASENTAMIENTOURBANOS = 1;
jsonSource_BARRIOSYOASENTAMIENTOURBANOS.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_BARRIOSYOASENTAMIENTOURBANOS++);
    feature.set("layerObject", lyr_BARRIOSYOASENTAMIENTOURBANOS);
});        
jsonSource_BARRIOSYOASENTAMIENTOURBANOS.addFeatures(features_BARRIOSYOASENTAMIENTOURBANOS);
}


// Funzione per caricare e aggiornare i layer uno alla volta
    // Array per i layer visibili/non visibili all'avvio (solo layer vettori e raster)
    var layersVisibleOnStart = [
        
    ];
    var layersHiddenOnStart = [
        { layer: lyr_BARRIOSYOASENTAMIENTOURBANOS, source: 'BARRIOSYOASENTAMIENTOURBANOS' }
    ];
    // Funzione per caricare il JSON source
    function loadJSON(fileName) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `layers/${fileName}.js`; // Percorso del file
            script.onload = () => {
                resolve(fileName);  // Risolviamo la promise passando il nome del file
            };
            script.onerror = (e) => {
                console.error(`Errore nel caricamento di ${fileName}.js:`, e);
                reject(new Error(`Errore nel caricamento di ${fileName}.js`));
            };
            document.head.appendChild(script);
        });
    }
    // Carico i dati nei layer
    async function loadLayers() {
        try {
            // Carica prima i layer visibili all'avvio
            for (const { layer, source } of layersVisibleOnStart) {
                await loadJSON(source);
                // Inietta i dati del layer
                window[`load_${source}_data`]();
            }
            // Carica i layer non visibili all'avvio
            for (const { layer, source } of layersHiddenOnStart) {
                await loadJSON(source);
                // Inietta i dati del layer
                window[`load_${source}_data`]();
            }
            // Quando tutti i layer sono stati caricati e aggiornati, emetti 'layersLoaded'
            window.layersLoadedFlag = true;
            const layersLoaded = new Event('layersLoaded');
            document.dispatchEvent(layersLoaded);
        } catch (error) {
            console.error("Errore nel caricamento dei layer:", error);
            throw error;
        }
    }
    // Esegui il caricamento dei layer una volta che il DOM è pronto
    document.addEventListener("DOMContentLoaded", () => {
        loadLayers();  // Inizia il caricamento dei layer uno per volta
    });

var group_TERMINADO = new ol.layer.Group({
                                layers: [lyr_BARRIOSYOASENTAMIENTOURBANOS,],
                                openInLayerSwitcher: true,
                                title: 'TERMINADO'});

lyr_GoogleSatellite.setVisible(true);lyr_OpenStreetMap.setVisible(true);lyr_BARRIOSYOASENTAMIENTOURBANOS.setVisible(false);
var layersList = [lyr_GoogleSatellite,lyr_OpenStreetMap,group_TERMINADO];
lyr_BARRIOSYOASENTAMIENTOURBANOS.set('fieldAliases', {'fid': 'fid', 'CODG': 'CODG', 'PorcenCom': 'PorcenCom', 'NOMBRE': 'NOMBRE', 'ACTO ADMINISTRATIVO': 'ACTO ADMINITRATIVO', 'OBSERVACIONES': 'OBSERVACIONES', 'FUENTES': 'FUENTES', 'COMUNA O CORREGIMIENTO': 'COMUNA O CORREGIMIENTO', 'CONDICIÓN': 'CONDICION', 'FECHA REPORTE': 'FECHA REPORTE', 'AREA (ha)': 'AREA (ha)', 'PERIMETRO (km)': 'PERIMETRO (km)', 'CONDICION DEL BARRIO': 'CONDICION DEL BARRIO', });
lyr_BARRIOSYOASENTAMIENTOURBANOS.set('fieldImages', {'fid': 'Hidden', 'CODG': 'Hidden', 'PorcenCom': 'Hidden', 'NOMBRE': 'TextEdit', 'ACTO ADMINISTRATIVO': 'TextEdit', 'OBSERVACIONES': 'TextEdit', 'FUENTES': 'TextEdit', 'COMUNA O CORREGIMIENTO': 'TextEdit', 'CONDICIÓN': 'TextEdit', 'FECHA REPORTE': 'Hidden', 'AREA (ha)': 'TextEdit', 'PERIMETRO (km)': 'TextEdit', 'CONDICION DEL BARRIO': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_BARRIOSYOASENTAMIENTOURBANOS.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'ACTO ADMINISTRATIVO': 'header label - always visible', 'OBSERVACIONES': 'inline label - visible with data', 'FUENTES': 'inline label - visible with data', 'COMUNA O CORREGIMIENTO': 'inline label - always visible', 'CONDICIÓN': 'header label - always visible', 'AREA (ha)': 'header label - always visible', 'PERIMETRO (km)': 'header label - always visible', 'CONDICION DEL BARRIO': 'header label - always visible', });
lyr_BARRIOSYOASENTAMIENTOURBANOS.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});