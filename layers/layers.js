var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1 = new ol.format.GeoJSON();
var features_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1 = format_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1.readFeatures(json_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1.addFeatures(features_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1);
var lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1, 
                style: style_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1,
                interactive: true,
                title: '<img src="styles/legend/Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1.png" /> Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios'
            });
var format_Bosque_2 = new ol.format.GeoJSON();
var features_Bosque_2 = format_Bosque_2.readFeatures(json_Bosque_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bosque_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bosque_2.addFeatures(features_Bosque_2);
var lyr_Bosque_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bosque_2, 
                style: style_Bosque_2,
                interactive: true,
                title: '<img src="styles/legend/Bosque_2.png" /> Bosque'
            });
var format_CentroComercial_3 = new ol.format.GeoJSON();
var features_CentroComercial_3 = format_CentroComercial_3.readFeatures(json_CentroComercial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentroComercial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentroComercial_3.addFeatures(features_CentroComercial_3);
var lyr_CentroComercial_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentroComercial_3, 
                style: style_CentroComercial_3,
                interactive: true,
                title: '<img src="styles/legend/CentroComercial_3.png" /> Centro Comercial'
            });
var format_ParquesRecreativos_4 = new ol.format.GeoJSON();
var features_ParquesRecreativos_4 = format_ParquesRecreativos_4.readFeatures(json_ParquesRecreativos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquesRecreativos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquesRecreativos_4.addFeatures(features_ParquesRecreativos_4);
var lyr_ParquesRecreativos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParquesRecreativos_4, 
                style: style_ParquesRecreativos_4,
                interactive: true,
                title: '<img src="styles/legend/ParquesRecreativos_4.png" /> Parques Recreativos'
            });
var format_Rutas_5 = new ol.format.GeoJSON();
var features_Rutas_5 = format_Rutas_5.readFeatures(json_Rutas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_5.addFeatures(features_Rutas_5);
var lyr_Rutas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rutas_5, 
                style: style_Rutas_5,
                interactive: true,
    title: 'Rutas<br />\
    <img src="styles/legend/Rutas_5_0.png" /> 0,959<br />\
    <img src="styles/legend/Rutas_5_1.png" /> 1,625<br />\
    <img src="styles/legend/Rutas_5_2.png" /> 1,717<br />\
    <img src="styles/legend/Rutas_5_3.png" /> 1,989<br />\
    <img src="styles/legend/Rutas_5_4.png" /> 2,209<br />\
    <img src="styles/legend/Rutas_5_5.png" /> 3,784<br />\
    <img src="styles/legend/Rutas_5_6.png" /> 5,991<br />\
    <img src="styles/legend/Rutas_5_7.png" /> 6,373<br />\
    <img src="styles/legend/Rutas_5_8.png" /> 7,309<br />'
        });
var format_SitiosTuristicos_6 = new ol.format.GeoJSON();
var features_SitiosTuristicos_6 = format_SitiosTuristicos_6.readFeatures(json_SitiosTuristicos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiosTuristicos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosTuristicos_6.addFeatures(features_SitiosTuristicos_6);
var lyr_SitiosTuristicos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SitiosTuristicos_6, 
                style: style_SitiosTuristicos_6,
                interactive: true,
                title: '<img src="styles/legend/SitiosTuristicos_6.png" /> Sitios Turisticos'
            });
var format_Veredas_7 = new ol.format.GeoJSON();
var features_Veredas_7 = format_Veredas_7.readFeatures(json_Veredas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Veredas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Veredas_7.addFeatures(features_Veredas_7);
var lyr_Veredas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Veredas_7, 
                style: style_Veredas_7,
                interactive: true,
    title: 'Veredas<br />\
    <img src="styles/legend/Veredas_7_0.png" /> Vereda Barcelona<br />\
    <img src="styles/legend/Veredas_7_1.png" /> Vereda Buenos Aires Alto<br />\
    <img src="styles/legend/Veredas_7_2.png" /> Vereda del Carmen<br />\
    <img src="styles/legend/Veredas_7_3.png" /> Vereda el Cairo<br />\
    <img src="styles/legend/Veredas_7_4.png" /> Vereda la Mercedes<br />'
        });
var format_VillaOlimpica_8 = new ol.format.GeoJSON();
var features_VillaOlimpica_8 = format_VillaOlimpica_8.readFeatures(json_VillaOlimpica_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VillaOlimpica_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillaOlimpica_8.addFeatures(features_VillaOlimpica_8);
var lyr_VillaOlimpica_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VillaOlimpica_8, 
                style: style_VillaOlimpica_8,
                interactive: true,
                title: '<img src="styles/legend/VillaOlimpica_8.png" /> Villa Olimpica'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1.setVisible(true);lyr_Bosque_2.setVisible(true);lyr_CentroComercial_3.setVisible(true);lyr_ParquesRecreativos_4.setVisible(true);lyr_Rutas_5.setVisible(true);lyr_SitiosTuristicos_6.setVisible(true);lyr_Veredas_7.setVisible(true);lyr_VillaOlimpica_8.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1,lyr_Bosque_2,lyr_CentroComercial_3,lyr_ParquesRecreativos_4,lyr_Rutas_5,lyr_SitiosTuristicos_6,lyr_Veredas_7,lyr_VillaOlimpica_8];
lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1.set('fieldAliases', {'nombre del prestador': 'nombre del prestador', 'NIT': 'NIT', 'DV': 'DV', 'Numero de Acto administrativo': 'Numero de Acto administrativo', 'Código DANE': 'Código DANE', 'Tipo de Fuente Hidrica': 'Tipo de Fuente Hidrica', 'Nombre de la Fuente': 'Nombre de la Fuente', 'Concesion de Aguas': 'Concesion de Aguas', 'Fecha Inicio de Concesion': 'Fecha Inicio de Concesion', 'Fecha Final de Concesion': 'Fecha Final de Concesion', 'Uso de Abastecimiento': 'Uso de Abastecimiento', 'Caudal Concesionado': 'Caudal Concesionado', 'Caudal Ecologico': 'Caudal Ecologico', 'Tipo de Estructura de Medición': 'Tipo de Estructura de Medición', 'Sitio de Captacion -Longitud': 'Sitio de Captacion -Longitud', 'Sitio de Captacion -Latitud': 'Sitio de Captacion -Latitud', 'Sitio de Captación georreferenciada': 'Sitio de Captación georreferenciada', });
lyr_Bosque_2.set('fieldAliases', {'id': 'id', 'area': 'area', 'perimetro': 'perimetro', 'zona': 'zona', });
lyr_CentroComercial_3.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'dueño': 'dueño', 'direccion': 'direccion', });
lyr_ParquesRecreativos_4.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'estado': 'estado', });
lyr_Rutas_5.set('fieldAliases', {'id': 'id', 'distancia': 'distancia', 'estado': 'estado', 'ruta': 'ruta', 'km\'s': 'km\'s', });
lyr_SitiosTuristicos_6.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'estado': 'estado', });
lyr_Veredas_7.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'area': 'area', 'perimetro': 'perimetro', });
lyr_VillaOlimpica_8.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'area': 'area', 'perimetro': 'perimetro', });
lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1.set('fieldImages', {'nombre del prestador': '', 'NIT': '', 'DV': '', 'Numero de Acto administrativo': '', 'Código DANE': '', 'Tipo de Fuente Hidrica': '', 'Nombre de la Fuente': '', 'Concesion de Aguas': '', 'Fecha Inicio de Concesion': '', 'Fecha Final de Concesion': '', 'Uso de Abastecimiento': '', 'Caudal Concesionado': '', 'Caudal Ecologico': '', 'Tipo de Estructura de Medición': '', 'Sitio de Captacion -Longitud': '', 'Sitio de Captacion -Latitud': '', 'Sitio de Captación georreferenciada': '', });
lyr_Bosque_2.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', 'zona': 'TextEdit', });
lyr_CentroComercial_3.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'dueño': 'TextEdit', 'direccion': 'TextEdit', });
lyr_ParquesRecreativos_4.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'estado': 'TextEdit', });
lyr_Rutas_5.set('fieldImages', {'id': 'TextEdit', 'distancia': 'TextEdit', 'estado': 'TextEdit', 'ruta': 'TextEdit', 'km\'s': 'TextEdit', });
lyr_SitiosTuristicos_6.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'estado': 'TextEdit', });
lyr_Veredas_7.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_VillaOlimpica_8.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_1.set('fieldLabels', {'nombre del prestador': 'no label', 'NIT': 'no label', 'DV': 'no label', 'Numero de Acto administrativo': 'no label', 'Código DANE': 'no label', 'Tipo de Fuente Hidrica': 'no label', 'Nombre de la Fuente': 'no label', 'Concesion de Aguas': 'no label', 'Fecha Inicio de Concesion': 'no label', 'Fecha Final de Concesion': 'no label', 'Uso de Abastecimiento': 'no label', 'Caudal Concesionado': 'no label', 'Caudal Ecologico': 'no label', 'Tipo de Estructura de Medición': 'no label', 'Sitio de Captacion -Longitud': 'no label', 'Sitio de Captacion -Latitud': 'no label', 'Sitio de Captación georreferenciada': 'no label', });
lyr_Bosque_2.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'perimetro': 'no label', 'zona': 'no label', });
lyr_CentroComercial_3.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'dueño': 'no label', 'direccion': 'no label', });
lyr_ParquesRecreativos_4.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'estado': 'no label', });
lyr_Rutas_5.set('fieldLabels', {'id': 'no label', 'distancia': 'no label', 'estado': 'no label', 'ruta': 'no label', 'km\'s': 'no label', });
lyr_SitiosTuristicos_6.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'estado': 'no label', });
lyr_Veredas_7.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'area': 'no label', 'perimetro': 'no label', });
lyr_VillaOlimpica_8.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'area': 'no label', 'perimetro': 'no label', });
lyr_VillaOlimpica_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});