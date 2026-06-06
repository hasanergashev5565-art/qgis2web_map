var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: ' building',
                interactive: true,
                title: '<img src="styles/legend/building_1.png" />  building'
            });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                popuplayertitle: ' highway',
                interactive: true,
                title: '<img src="styles/legend/highway_2.png" />  highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_building_1.setVisible(true);lyr_highway_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_building_1,lyr_highway_2];
lyr_building_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'shop': 'shop', 'name:en': 'name:en', 'name': 'name', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand:en': 'brand:en', 'brand': 'brand', 'type': 'type', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'layer': 'layer', 'ref': 'ref', 'oneway': 'oneway', 'name:ru': 'name:ru', 'name:en': 'name:en', 'bridge': 'bridge', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'surface': 'surface', });
lyr_building_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'shop': 'TextEdit', 'name:en': 'TextEdit', 'name': 'TextEdit', 'brand:wikipedia': 'TextEdit', 'brand:wikidata': 'TextEdit', 'brand:en': 'TextEdit', 'brand': 'TextEdit', 'type': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': 'TextEdit', });
lyr_highway_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'layer': '', 'ref': '', 'oneway': '', 'name:ru': '', 'name:en': '', 'bridge': '', 'name:etymology:wikidata': '', 'name': '', 'surface': '', });
lyr_building_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'shop': 'no label', 'name:en': 'no label', 'name': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand:en': 'no label', 'brand': 'no label', 'type': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'layer': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'bridge': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'surface': 'no label', });
lyr_highway_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});