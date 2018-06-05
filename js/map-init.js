

function init() {
    
    
    var myMap = new ymaps.Map("map", {
         center: [51.160085, 71.411210]
        , zoom: 16
        , controls: ['zoomControl']
    });
    
    
    myMap.behaviors.disable('multiTouch');
    myMap.behaviors.disable('scrollZoom');
    var myGeoObjects = [];
    
    
    var latt = 51.159817;
    var longg = 71.405842;
    
    if ($(window).width() <= 991) {
        myMap.setCenter([latt, longg], 16, {
            checkZoomRange: false
        });
        flag_for_center = false;
    }
    myGeoObjects = new ymaps.Placemark([latt, longg], {
        clusterCaption: 'Заголовок'
    }, {
        iconLayout: 'default#image'
        , iconImageHref: 'img/marker-1.png'
        , iconImageSize: [39, 51]
        , iconImageOffset: [-19.5, -51]
    });
  
  
    
    
    
    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false
        , clusterOpenBalloonOnClick: false
        , clusterBalloonPanelMaxMapArea: 0
        , clusterBalloonContentLayoutWidth: 300
        , clusterBalloonContentLayoutHeight: 200
        , clusterBalloonPagerSize: 2
        , clusterBalloonPagerVisible: false
    });
    
    
    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    
}

ymaps.ready(init);


